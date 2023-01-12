import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/scenes/Home'
import Movie from './src/scenes/Movie'
import LogIn from './src/scenes/LogIn'

import { GlobalProvider } from './src/context/GlobalState'

const Stack = createStackNavigator();

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Movie" component={Movie}></Stack.Screen>
          <Stack.Screen name="LogIn" component={LogIn}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}