import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useBiometricAuthentication from '../../hooks/useBiometricAuthentication';

const AuthenticationScreen: React.FC<{ navigation: any }> = () => {
  const { success: isAuthenticated, error, loading } = useBiometricAuthentication(); 


  return (
    <View style={[styles.container]}>
      {loading ? (
        <Text style={styles.loadingText}>Authenticating...</Text>
      ) : isAuthenticated ? (
        <>
          <Text style={styles.text}>Authenticated</Text>
        </>
      ) : (
        <Text style={styles.failureText}>Authentication failed. Please try again.</Text>
      )}

      {error && <Text>Error: {error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingText: {
    fontSize: 20,
    color: '#333',
  },
  text: {
    fontSize: 24,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  failureText: {
    fontSize: 18,
    color: '#FF3B30',
  },
});

export default AuthenticationScreen;
