import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>; // Using 'any' for simplicity, replace it with your navigation shape
}

const Biometric: React.FC<Props> = ({ navigation }) => {
  const [biometricAuthenticated, setBiometricAuthenticated] = useState(false);

  useEffect(() => {
    authenticateWithBiometrics();
  }, []);

  const authenticateWithBiometrics = async () => {
    const hasBiometrics = await LocalAuthentication.hasHardwareAsync();
    if (hasBiometrics) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to access the app',
      });

      if (result.success) {
        setBiometricAuthenticated(true);
        handleAccessSecureScreen();
      }
    }
  };

  const handleAccessSecureScreen = () => {
    if (biometricAuthenticated) {
      // Allow access to the SecureScreen
      navigation.navigate('TodoList'); // Assuming 'TodoList' is the name of the screen to navigate to
    }
  };

  return (
    <View>
      {biometricAuthenticated ? (
        <TouchableOpacity onPress={handleAccessSecureScreen}>
          <Text>Unlock with Biometrics</Text>
        </TouchableOpacity>
      ) : (
        <Text>Biometric authentication is not available on this device.</Text>
      )}
    </View>
  );
}

export default Biometric;
