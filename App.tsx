/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {FC} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';
import Map from './src/screens/Map';

const Stack = createStackNavigator();

const App: FC = () => {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AttractionDetails" component={AttractionDetails} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
