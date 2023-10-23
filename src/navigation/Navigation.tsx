import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from '../screens/AuthenticationScreen/AuthenticationScreen';
import { useColorScheme } from 'react-native';
import TodoScreen from '../screens/TodoScreen/TodoScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen
          name="Lists"
          component={AuthenticationScreen}
          options={{ headerShown: false, title: 'Lists' }}
        />
        <Stack.Screen
          name="TodoScreen"
          component={TodoScreen}
          options={{
            headerShown: true,
            headerTitle: '', // Set the title of the header
            headerBackTitle: "Lists", // Set the text for the back button
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.colors.background, // Use colors.card for the background color
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
