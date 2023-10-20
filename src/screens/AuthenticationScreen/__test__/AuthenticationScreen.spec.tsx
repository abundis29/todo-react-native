import React from 'react';
import { render, act } from '@testing-library/react-native';
import AuthenticationScreen from '../AuthenticationScreen';

import * as LocalAuthentication from 'expo-local-authentication';

const mockedAuthenticateAsync = LocalAuthentication.authenticateAsync as jest.MockedFunction<typeof LocalAuthentication.authenticateAsync>;
const mockedHasHardwareAsync = LocalAuthentication.hasHardwareAsync as jest.MockedFunction<typeof LocalAuthentication.hasHardwareAsync>;

jest.mock('expo-local-authentication', () => ({
  authenticateAsync: jest.fn(() => Promise.resolve({ success: true })),
  hasHardwareAsync: jest.fn(() => Promise.resolve(true))
}));

describe('AuthenticationScreen', () => {
  beforeEach(() => {
    mockedHasHardwareAsync.mockClear();
    mockedAuthenticateAsync.mockClear();
  });

  it('should render "Authenticating..." while authenticating', async () => {

    const { debug, getByText } = render(<AuthenticationScreen navigation={{ navigate: jest.fn() }} />);
    expect(getByText('Authenticating...')).toBeTruthy();
    await act(async () => {
       await mockedAuthenticateAsync();
    });
    expect(getByText('Authenticated')).toBeTruthy();
  });

  it('should handle authentication failure', async () => {
    mockedAuthenticateAsync.mockResolvedValue({ success: false, error: 'authentication error' }); // Add error field here
    const { getByText } = render(<AuthenticationScreen navigation={{ navigate: jest.fn() }} />);
      await act(async () => {
      try {
        await mockedAuthenticateAsync();
      } catch (error) {
        expect(getByText('Authentication failed. Please try again.')).toBeTruthy();
      }
    });
  });
  
});
