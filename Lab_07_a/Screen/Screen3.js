import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Pressable, } from 'react-native';
import React from 'react';
import { NavigationAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useState } from 'react';
//import React from 'react';

const Screen3 = ({navigation, route}) => {
  const {user} = route?.params;

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', marginTop:-15}}>      
        <View style={{flexDirection:'row',marginLeft: 10}}>
          <Image source={{uri: user.image}} style={{width: 50,height:50, borderRadius: '50%', backgroundColor: "rgba(217, 203, 246, 1)",}}/>
          <View>
              <Text style={{fontSize: 20, fontWeight: "700" }}> Hi {user.name}</Text>        
              <Text style={{fontSize: 16, color:'gray', fontWeight: "600"}}>Have agrate day a head</Text>
          </View>
        </View>
        <Image source={require('../assets/Icon Button 11.png')} style={{width: 45, height: 45, marginLeft: 100}}/>
      </View>

      <View>
        <Text style={{fontSize:35, fontWeight:'650', margin: 25}}>ADD YOUR JOB</Text>
      </View>
      
      <View style={{width: 350,height:50, flexDirection:'row', borderWidth: 1, borderRadius: 5, margin: 30}}>
        <Image source={require('../assets/list.png')} style={{width: 30,height:30,  marginLeft: 5, margin: 10}}/>
        <TextInput
          placeholder='input your job'
          style={{fontSize: 16, marginLeft: 5, width: 325, height: 40, margin: 5}}
        />
      </View>
      
      <View style={{width: 150, height: 40, backgroundColor: '#00BDD6',borderRadius: 5, margin: 15 }}>
        <Pressable
            style={{flexDirection:'row' ,width: 150, height: 40}}
        >
            <Text style={{fontSize: 18, fontWeight: '450', color: 'white', margin: 8, marginLeft: 30}}>FINISH</Text>
            <Image source={require('../assets/muiten.png')} style={{width: 17,height: 12, margin: 14}}/>
        </Pressable>
      </View>
      

      <View>
        <Image source={require('../assets/Image 95.png')} style={{width: 190, height: 170, margin: 50}}/>
      </View>
    </View>
  );
}

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
