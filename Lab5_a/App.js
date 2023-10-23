
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
 
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    //<Screen1/>
    <NavigationContainer>
      <stack.Navigator mode='modal'>
      <stack.Screen options={ {headerShown:false}} name='Screen1' component={Screen1}></stack.Screen>
      <stack.Screen options={ {headerShown:false}} name='Screen2' component={Screen2}></stack.Screen>
      </stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
