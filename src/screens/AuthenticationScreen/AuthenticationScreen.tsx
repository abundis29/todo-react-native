import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { getStyles } from './AutenticationScreenStyles';
import useBiometrics from '../../hooks/useBiometrics';

const AuthenticationScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const { success: isAuthenticated, error, loading, handleBiometricsStatus } = useBiometrics(); // Import handleBiometricsStatus


  const styles = getStyles();

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Authenticating...</Text>
      ) : isAuthenticated ? (
        <>
          <View style={styles.header}>
            <Text style={styles.headerText}>Lists</Text>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => {
                // Navigate to settings or open the settings menu
              }}
            >

            </TouchableOpacity>
          </View>

          <View style={styles.dashboard}>
            {/* {TODO: CRUD LISTS OUTOF SCOPE} */}
            {['Reminders'].map((listName, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dashboardItem}
                onPress={() => {
                  navigation.navigate('TodoScreen', { listName });
                }}
              >
                <Text style={styles.dashboardItemText}>{listName}</Text>
              </TouchableOpacity>
            ))}
            {/* Add more dashboard items as needed */}
          </View>
        </>
      ) : (
        <View style={styles.failureContainer}>
          <Text style={styles.failureText}>Authentication failed. Please try again.</Text>
          <Button title="Try Again" onPress={handleBiometricsStatus} /> 
        </View>
      )}

      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
    </View>
  );
};

export default AuthenticationScreen;
