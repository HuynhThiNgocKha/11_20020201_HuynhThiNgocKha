import { StyleSheet, Text, View, Pressable, Image, } from 'react-native';
import { FlatList } from 'react-native';
import { useState } from 'react';

const array=[
  {
    id:1,
    img: require('../assets/ca_nau_lau.png'),
    name: 'Ca nấu lẩu, mì mini ... ',
    decription: 'Shop Devang',

  },
  {
    id:2,
    img: require('../assets/ga_bo_toi.png'),
    name: '1KG KHÔ GÀ BƠ TỎI.. ',
    decription: 'Shop LTD Food',

  },
  {
    id:3,
    img: require('../assets/xe_can_cau.png'),
    name: 'Xe cần cẩu đa năng',
    decription: 'Shop Thế giới đồ chơi',

  },
  {
    id:4,
    img: require('../assets/do_choi_dang_mo_hinh.png'),
    name: 'Đồ chơi dạng mô hình',
    decription: 'Shop Thế giới đồ chơi',

  },
  {
    id:5,
    img: require('../assets/lanh_dao_gian_don.png'),
    name: 'Lãnh đạo đơn giản ',
    decription: 'Shop Minh Long Book',

  },
  {
    id:6,
    img: require('../assets/hieu_long_con_tre.png'),
    name: 'Hiểu lòng con trẻ',
    decription: 'Shop Minh Long Book',

  },

]

export default function Screen_4a() {
  const[data,setData] = useState(array);
  return (
    <View style={styles.container}>
    <View>
      <View style={{width:'100%', height: 50, backgroundColor: '#1BA9FF', flexDirection:'row'}}>
        <Image source={require('../assets/muiten.png')} style={{width: 25, height: 25, resizeMode:'contain', marginTop: 12, marginLeft: 10}}></Image>
        <Text style={{fontSize: 20, fontWeight: '550', color:'white', marginLeft: 120, marginTop: 8}}>Chat</Text>
        <Image source={require('../assets/giohang.png')} style={{width: 30,height:40, resizeMode:'contain', marginLeft:100, marginTop: 5 }}></Image>
      </View>
      
      <View style={{width:'100%', height: 80,marginLeft: 25 , }}>
        <Text style={{fontSize:18, fontWeight:'500', marginTop: 5}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      </View>
    </View>
      
      
      <View>
        <FlatList
          data={data}
          renderItem={({item})=>{
            return(
              <View style={{width:'100%', height: 90, flexDirection:'row', borderColor:'rgba(196, 196, 196, 1)', borderWidth:1}}>
                  <Image source={item.img} style={{width: 80, height:80 }}/>
                  <View style={{marginTop: 15}}>
                      <Text style={{fontSize: 15, fontWeight:'500'}}>{item.name}</Text>
                      <Text style={{fontSize: 15, fontWeight:'500', color:'red', marginTop: 10, }}>{item.decription}</Text>
                  </View>
                  <View style={{marginLeft: 5, marginTop:16}}>
                    <Pressable style={{width: 100, height:45, backgroundColor:'red', }}>
                      <Text style={{fontSize:20, color: 'white',fontWeight:'500', marginTop: 10, marginLeft: 25}}>Chat</Text>
                    </Pressable>
                  </View>    
              </View>
            );
          }}
        />
      </View>

      <View style={{width:'100%', height: 60, backgroundColor: '#1BA9FF', flexDirection:'row'}}>
        <Image source={require('../assets/3daugach.png')} style={{width: 25, height: 25, resizeMode:'contain', marginTop: 15, marginLeft: 20}}></Image>
        <Image source={require('../assets/home.png')} style={{width: 25, height: 25, resizeMode:'contain', marginTop: 15, marginLeft: 120}}></Image>
        <Image source={require('../assets/Stroke.png')} style={{width: 25, height: 25, resizeMode:'contain', marginTop: 15, marginLeft: 120}}></Image>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    
  },
});
