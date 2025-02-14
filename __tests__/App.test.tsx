import React from 'react';
import { act, render, renderHook, waitFor } from '@testing-library/react-native';
import App from '../App';
import * as reduxPersist from 'redux-persist';

import * as LocalAuthentication from 'expo-local-authentication';
import useBiometrics from '../src/hooks/useBiometrics';

LocalAuthentication.authenticateAsync as jest.MockedFunction<typeof LocalAuthentication.authenticateAsync>;
LocalAuthentication.hasHardwareAsync as jest.MockedFunction<typeof LocalAuthentication.hasHardwareAsync>;

jest.mock('expo-local-authentication', () => ({
  authenticateAsync: jest.fn(() => Promise.resolve({ success: true })),
  hasHardwareAsync: jest.fn(() => Promise.resolve(true))
}));


// jest.setup.js
jest.mock('react-native/Libraries/Settings/NativeSettingsManager', () => ({
  getConstants: jest.fn(),
  get: jest.fn(),
  set: jest.fn(),
}));


// Mock `react-native-gesture-handler` for testing
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: 'View', // Mock GestureHandlerRootView as a simple View
}));

// Mock the stack navigator to avoid navigation issues
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }) => children,
    Screen: ({ component: Component, ...props }) => <Component {...props} />,
  }),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    NavigationContainer: ({ children }) => children,
  };
});



jest.useFakeTimers();

describe('App Component', () => {
  beforeEach(() => {
    // Mock persistStore before each test if it's needed
    jest.spyOn(reduxPersist, 'persistStore').mockReturnValue({
      pause: jest.fn(),
      persist: jest.fn(),
      purge: jest.fn(),
      flush: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn(),
      subscribe: jest.fn(),
    });
  });
  afterEach(() => {
    // Clear the mock after each test to avoid interfering with other tests
    jest.restoreAllMocks();
  });
  it('renders the application', async () => {
    const { result } = renderHook(() => useBiometrics());
    await act(async () => {
      await result.current;
    });

    const { getByText } = render(<App />);
    jest.runAllTimers();
    await waitFor(() => expect(getByText('Authenticating...')).toBeTruthy());
  });

  it('authenticates successfully and shows authenticated state', async () => {
    const { getByText } = render(<App />);
    jest.runAllTimers();
    await waitFor(() => expect(getByText('Lists')).toBeTruthy());
  });
});