import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
export default function Screen1({navigation, route}) {
  return (
    <View style={styles.container}>
        <View>
            <Image  source={route.params?.image || require('../assets/vs_blue.png')} style={styles.img}></Image>
        </View>
        <Text style={{flexDirection:'row', display:'flex',fontSize: 18, marginLeft: '20px', marginBottom:'10px', fontWeight:'500'}}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/star.png')} style={{width: '25px', height:'25px', marginLeft:'20px',marginBottom:'10px'}}></Image>
            <Image source={require('../assets/star.png')} style={{width: '25px', height:'25px', marginLeft:'10px',marginBottom:'10px'}}></Image>
            <Image source={require('../assets/star.png')} style={{width: '25px', height:'25px', marginLeft:'10px',marginBottom:'10px'}}></Image>
            <Image source={require('../assets/star.png')} style={{width: '25px', height:'25px', marginLeft:'10px',marginBottom:'10px'}}></Image>
            <Image source={require('../assets/star.png')} style={{width: '25px', height:'25px', marginLeft:'10px',marginBottom:'10px'}}></Image>
            
            <Text style={{fontSize:18, marginLeft:'15px'}}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{flexDirection:'row', marginBottom:'10px'}}>
            <Text style={{fontSize:20, marginLeft:'20px', fontWeight:'600'}}>1.790.000 đ</Text>
            <Text style={{fontSize:18, marginLeft:'45px', fontWeight:'450'}}><s>1.970.000 đ</s></Text>
        </View>
        <View style={{flexDirection:'row', marginBottom:'15px'}}>
            <Text style={{fontSize: 16, color: 'red', marginLeft:'20px', fontWeight:'700'}}>Ở ĐÂU RẺ HOÀN TIỀN</Text>
            <Image style={{width: '20px', height:'20px', marginLeft:'10px'}} source={require('../assets/inquire.png')}></Image>
        </View>
        <View >
            <Pressable style={{flexDirection:'row', width:'350px', height:'37px', borderWidth:1, borderRadius:'8px', marginLeft: 20, marginTop:'10px'}}
                onPress={()=>navigation.navigate('Screen2')}>
                <Text style={{fontSize: 18, fontWeight:'500', marginLeft:'80px', marginTop:'4.5px'}}>4 MÀU-CHỌN MÀU</Text>
                <Image source={require('../assets/vector.png')} style={{width: 10, height: 10, marginLeft:'75px', marginTop:'10px'}}></Image>
            </Pressable>          
        </View>
        <View>
            <Pressable style={{flexDirection:'row', width:'330px', height:'40px',  borderRadius:'10px', marginLeft: 27, marginTop: 70, backgroundColor: 'red'}}>
                <Text style={{fontSize: 20, fontWeight: '550', marginLeft:'115px', marginTop:'5.5px', color:'white'}}>CHỌN MUA</Text>
            </Pressable>
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
        resizeMode:'contain',
        
      },
    
     
    });
