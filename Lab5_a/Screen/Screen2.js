import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Screen2({navigation, route}) {
  //const [data, setData] = useState(1);
  return (
    <View style={styles.container}>
      <View>
        <Image source={route.params?.img} style={{width: 270, height: 270, resizeMode:'contain'}}/>
      </View>

      <View style={{ width: "100%", justifyContent: "space-around", height: 250,marginLeft:10 }}>
        <Text style={{ width: "100%", fontSize: 22, fontWeight: "700" }}>{route.params?.name}</Text>
        
        <View style={{flexDirection:'row', marginTop: -180}}>
          <Text style={{ width: "100%", fontSize: 18, fontWeight: "700",color:'rgba(0, 0, 0, 0.54)' }}>{route.params?.description}</Text>
          <Text style={{fontSize:20, fontWeight:'700', marginRight:20}}>{route.params?.price} </Text> 
        </View>
      </View>

      <View style={{width:'100%', height: 100,  marginTop: -70 }}>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/clock.png')} style={{width:20,height:20, resizeMode:'contain', marginLeft:10}}/>
          <Text style={{fontSize: 18, fontWeight:'700', color:'rgba(0, 0, 0, 0.54)', marginLeft:10}}>Delivery in</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:22, fontWeight:'700', marginLeft:20}}>30 min</Text>
          
          <View style={{flexDirection:'row', marginLeft: 190}}>
            <Image source={require('../assets/dautru.png')} style={{width:20, height:20, marginLeft:-6 }}></Image>
            <Text style={{fontSize:22, fontWeight:'700', marginLeft: 8, marginTop: -5}}>1</Text>
            <Image source={require('../assets/daucong.png')} style={{width:20, height:20, marginLeft:8}}></Image>
          </View>

        </View>           
      </View>
          
      <View style={{width:'100%', height: 200,  marginTop: -30 }}>
        <Text style={{fontSize:22, fontWeight:'700', marginLeft: 10, }}>Restaurants info</Text>
        <Text style={{fontSize:15, fontWeight:'700', color:'rgba(0, 0, 0, 0.54)', marginLeft: 10, marginRight:5 }}>
          Order a Large Pizza but the size is the equivalent
           of a medium/small from other places at the same 
           price range.
        </Text>
      </View>

      <View>
        <Pressable style={{width:316, height:55, backgroundColor:'rgba(241, 176, 0, 1)', borderWidth: 1, borderRadius:5, borderColor:'rgba(0, 0, 0, 0.2)', alignItems:'center',justifyContent:'center', marginTop:-80}}>
          <Text style={{ fontSize: 25, fontWeight: "700", color: "#fff" }}>
            Add to cart
          </Text>
        </Pressable>
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