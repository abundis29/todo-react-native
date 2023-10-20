import React from 'react';
import AuthenticationScreen from "../screens/AuthenticationScreen/AuthenticationScreen"
import TodoListScreen from "../screens/TodoListScreen/TodoListScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen
          name="Authentication"
          component={AuthenticationScreen}
          options={{ headerShown: false, title: 'Authentication' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
