import { act, renderHook } from '@testing-library/react-native';
import useBiometricAuthentication from '../useBiometricAuthentication';
import * as LocalAuthentication from 'expo-local-authentication';

const mockedAuthenticateAsync = LocalAuthentication.authenticateAsync as jest.MockedFunction<typeof LocalAuthentication.authenticateAsync>;
const mockedHasHardwareAsync = LocalAuthentication.hasHardwareAsync as jest.MockedFunction<typeof LocalAuthentication.hasHardwareAsync>;

jest.mock('expo-local-authentication', () => ({
  authenticateAsync: jest.fn(() => Promise.resolve({ success: true })),
  hasHardwareAsync: jest.fn(() => Promise.resolve(true))
}));

describe('useBiometricAuthentication', () => {

  beforeEach(() => {
    mockedHasHardwareAsync.mockClear();
    mockedAuthenticateAsync.mockClear();
  });

  it('should authenticate with biometrics and return success', async () => {
    const { result } = renderHook(() => useBiometricAuthentication());

    await act(async () => {
      await result.current;
    });

    expect(mockedHasHardwareAsync).toHaveBeenCalledTimes(1);
    expect(mockedAuthenticateAsync).toHaveBeenCalledTimes(1);
    expect(result.current.success).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
  });

  it('should handle biometric authentication error', async () => {
    mockedAuthenticateAsync.mockResolvedValue({ success: false, error: 'authentication error' }); // Add error field here
    const { result } = renderHook(() => useBiometricAuthentication());

    await act(async () => {
      await result.current;
    });
    
    expect(result.current.success).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
  });
});
