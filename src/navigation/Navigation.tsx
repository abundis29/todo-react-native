import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from '../screens/AuthenticationScreen/AuthenticationScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen
          name="Lists"
          component={AuthenticationScreen}
          options={{ headerShown: false, title: 'Lists' }}
        />
        <Stack.Screen
          name="TodoList"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitle: '', // Set the title of the header
            headerBackTitle: "Lists", // Set the text for the back button
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
