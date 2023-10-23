import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function Screen2({navigation, route}) {
  const [image, setImage] = useState(require('../assets/vs_blue.png'))
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
        <Image source={image} style={{width: 140, height: 140, resizeMode:'contain'}}></Image>
        <Text style={{fontSize: 18, fontWeight:'400', marginTop: 15}}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng </Text>
    </View>
    <View style={{backgroundColor:'#C4C4C4', width:'100%', height: 500, marginTop: 15}}>
      <Text style={{fontSize: 18, fontWeight:'400', marginTop: 10, marginLeft: 15}}>Chọn một màu bên dưới:</Text>
      <View style ={styles.pressable}>
        <Pressable style={styles.blueImage} 
          onPress={()=>{setImage(require('../assets/vs_blue.png'))}}
        ></Pressable>
        <Pressable style={styles.blackImage}
          onPress={()=>{setImage(require('../assets/vs_black.png'))}}
        ></Pressable>
        <Pressable style={styles.redImage}
          onPress={()=>{setImage(require('../assets/vs_red.png'))}}
        
        ></Pressable>
        <Pressable style={styles.silverImage}
          onPress={()=>{setImage(require('../assets/vs_silver.png'))}}
        ></Pressable>
        <Pressable style={{width: 350, height: 45, backgroundColor: 'blue', borderRadius: 5, marginLeft: 20, marginTop: 20}}
        onPress={()=> navigation.navigate(
          {name:'Screen1', params:{image:image}}
        )}>
          <Text style={{fontSize: 20, fontWeight: '600', color:'white', marginLeft: 150, marginTop: 9.5}}>XONG</Text>
        </Pressable>

      </View>
    </View>
       
    </View>
  );
}
 const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
       
      },
      img:{
        width: '300px',
        height: '350px',
        marginLeft: '40px',
        
        
      },
     pressable:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
        
     },
     blueImage:{
        width: 85,
        height: 80,
        backgroundColor: 'blue',
        marginTop: 10,
        resizeMode:'contain',
     }, 
     redImage:{
      width: 85,
        height: 80,
        backgroundColor: 'red',
        marginTop: 10,
        resizeMode:'contain',
     },
     silverImage:{
      width: 85,
      height: 80,
      backgroundColor: 'white',
      marginTop: 10,
      resizeMode:'contain',
     },
     blackImage:{
      width: 85,
        height: 80,
        backgroundColor: 'black',
        marginTop: 10,
        resizeMode:'contain',
     }
     
    });
