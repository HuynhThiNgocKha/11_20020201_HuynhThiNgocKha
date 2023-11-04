import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Pressable, } from 'react-native';
import React from 'react';
import { NavigationAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row' }}>
        <Image source={require('../assets/Icon Button 11.png')} style={{width: 50,height:50}}/>
      </View>

      <View style={{width: 350,height:50, flexDirection:'row', borderWidth: 1, borderRadius: 5}}>
        <Image source={require('../assets/search.png')} style={{width: 30,height:30,  marginLeft: 5, margin: 10}}/>
        <TextInput
          placeholder='Rearch'
          style={{fontSize: 16, marginLeft: 5, width: 325, height: 40, margin: 5}}
        />
      </View>


      <View>
        <Image source={require('../assets/Group 13.png')} style={{width: 80, height: 80, margin: 100}}/>
      </View>
    </View>
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
