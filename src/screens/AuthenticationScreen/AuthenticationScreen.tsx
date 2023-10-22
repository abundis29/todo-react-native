import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useBiometricAuthentication from '../../hooks/useBiometricAuthentication';
import colors from '../../utils/colors';

const AuthenticationScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const { success: isAuthenticated, error, loading } = useBiometricAuthentication(); 

  useEffect(()=>{
    if(isAuthenticated){
      // TODO: update this temporal change later
      navigation.navigate('TodoList')
    }
  }, [isAuthenticated])
  return (
    <View style={styles.container}>
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
  failureText: {
    color: colors.error,
    fontSize: 18,
  },
  loadingText: {
    color: colors.white,
    fontSize: 20,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AuthenticationScreen;
