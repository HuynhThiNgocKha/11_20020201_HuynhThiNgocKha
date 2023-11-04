import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';
import Screen3 from './Screen/Screen3';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //<Screen1/>
    //<Screen2/>
    <Screen3/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Screen1' component={Screen1} options={{headerShown: false}}/>
    //     <Stack.Screen name='Screen2' component={Screen2} options={{headerShown: false}}/>
    //     <Stack.Screen name='Screen3' component={Screen3} options={{headerShown: false}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}




