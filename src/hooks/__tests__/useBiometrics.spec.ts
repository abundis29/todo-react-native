import { act, renderHook } from '@testing-library/react-native';
import useBiometrics from '../useBiometrics'; // Update the path to your useBiometrics module
import * as LocalAuthentication from 'expo-local-authentication';

const mockedAuthenticateAsync = LocalAuthentication.authenticateAsync as jest.MockedFunction<typeof LocalAuthentication.authenticateAsync>;
const mockedHasHardwareAsync = LocalAuthentication.hasHardwareAsync as jest.MockedFunction<typeof LocalAuthentication.hasHardwareAsync>;

jest.mock('expo-local-authentication', () => ({
  authenticateAsync: jest.fn(() => Promise.resolve({ success: true })),
  hasHardwareAsync: jest.fn(() => Promise.resolve(true))
}));


describe('useBiometrics', () => {
  beforeEach(() => {
    mockedHasHardwareAsync.mockClear();
    mockedAuthenticateAsync.mockClear();
  });

  it('should authenticate with biometrics and return success', async () => {
    const { result } = renderHook(() => useBiometrics());
  
    await act(async () => {
      await result.current; // Call the function
    });
  
    expect(mockedHasHardwareAsync).toHaveBeenCalledTimes(1);
    expect(mockedAuthenticateAsync).toHaveBeenCalledTimes(1);
    expect(result.current.success).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
  });
  

  it('should handle biometric authentication error', async () => {
    // Mock a failed authentication
    mockedAuthenticateAsync.mockResolvedValue({ success: false, error: 'authentication error' });
    const { result } = renderHook(() => useBiometrics());

    await act(async () => {
      await result.current.handleBiometricsStatus();
    });

    expect(result.current.success).toBe(false);
    expect(result.current.error).not.toBeNull();
    expect(result.current.loading).toBe(false);
  });
});
