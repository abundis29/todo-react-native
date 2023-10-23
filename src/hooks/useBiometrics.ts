import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

const useBiometricAuthentication = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBiometricsStatus = async () => {
    try {
      const hasHardwareAsyncResult = await LocalAuthentication.hasHardwareAsync();
      await LocalAuthentication.supportedAuthenticationTypesAsync();

      if (hasHardwareAsyncResult) {
        authenticateWithBiometrics();
      } else {
        setError(new Error('Biometric hardware not found.'));
        setLoading(false);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  const authenticateWithBiometrics = async () => {
    try {
      const hasBiometrics = await LocalAuthentication.hasHardwareAsync();
      if (hasBiometrics) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Authenticate to access the app',
        });

        if (result.success) {
          setSuccess(true);
        }
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticateWithBiometrics();
  }, []);

  return { success, error, loading, handleBiometricsStatus };
};

export default useBiometricAuthentication;
