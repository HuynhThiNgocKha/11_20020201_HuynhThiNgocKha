import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Pressable, } from 'react-native';
import React from 'react';
import { NavigationAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Screen3() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row' }}>
        <Image source={require('../assets/Icon Button 11.png')} style={{width: 50,height:50}}/>
      </View>
        <Text style={{fontSize:35, fontWeight:'650'}}>ADD YOUR JOB</Text> 
      <View>
            
      </View>
      <View style={{width: 350,height:50, flexDirection:'row', borderWidth: 1, borderRadius: 5, margin: 50}}>
        <Image source={require('../assets/list.png')} style={{width: 30,height:30,  marginLeft: 5, margin: 10}}/>
        <TextInput
          placeholder='input your job'
          style={{fontSize: 16, marginLeft: 5, width: 325, height: 40, margin: 5}}
        />
      </View>
      
      <View style={{width: 150, height: 40, backgroundColor: '#00BDD6',borderRadius: 5, margin: 30 }}>
        <Pressable
            style={{flexDirection:'row' ,width: 150, height: 40}}
        >
            <Text style={{fontSize: 18, fontWeight: '450', color: 'white', margin: 8, marginLeft: 30}}>FINISH</Text>
            <Image source={require('../assets/muiten.png')} style={{width: 17,height: 12, margin: 14}}/>
        </Pressable>
      </View>
      

      <View>
        <Image source={require('../assets/Image 95.png')} style={{width: 190, height: 170, margin: 80}}/>
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
