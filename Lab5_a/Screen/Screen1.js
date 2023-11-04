import { useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';

const array=[
    {
        id:1,
        img: require('../assets/donut_yellow.png'),
        name: 'Tasty Donut',
        description: "Spicy tasty donut family",
        price: '$10.00',
        type: 'T',
    },

    {
        id:2,
        img: require('../assets/tasty_donut.png'),
        name: 'Pink Donut',
        description: "Spicy tasty donut family",
        price: '$20.00',
        type: 'P',
    },

    {
        id:3,
        img: require('../assets/green_donut.png'),
        name: 'Floating Donut',
        description: "Spicy tasty donut family",
        price: '$30.00',
        type: 'F',
    },

    {
        id:4,
        img: require('../assets/donut_red.png'),
        name: 'Tasty Donut',
        description: "Spicy tasty donut family",
        price: '$40.00',
        type: 'T',
    },
    ]

export default function Screen1({navigation}) {
    const[data,setData] = useState(array);
    const[state,setState] = useState(1);
    return (
    <View style={styles.container}>
        <View style={{width:'100%', height: '10%', marginTop: 10 }}>
            <Text style={{fontSize: 17, color:'rgba(0, 0, 0, 0.65)', fontWeight:'700' }}>Welcome, Jala!</Text>
            <Text style={{fontSize: 19, fontWeight:'700', }}>Choice you Best food</Text>
        </View>
        <View style={{width: "100%", height: "10%",}}>

            <TextInput 
                placeholder='Search food'
                style={{width:265, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.1)', borderWidth:1, borderColor:'rgba(196, 196, 196, 0.1)', borderRadius:3, padding: 10, marginTop: -20 }}
            />
            <View style={{width:'100%',height:'10%',flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop: 20}}>
                <Pressable
                    onPress={()=>{
                        setData(array);
                        setState(1);
                    }}
                    style={{
                    width: 100,
                    height: 35, 
                    borderWidth: 1, 
                    borderRadius: 4,
                    borderColor:'rgba(0, 0, 0, 0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: 
                        state == 1 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
                        
                    }}
                >
                    <Text style={{fontSize: 15, fontWeight:'700'}}>Donut</Text>
                </Pressable>

                <Pressable
                    onPress={()=>{
                    setData([
                        ...array.filter((x) => {
                            return x.type =='P';
                        }),
                    ]);
                    setState(2);
                    }}
                    style={{
                    width: 100,
                    height: 35, 
                    borderWidth: 1, 
                    borderRadius: 4,
                    borderColor:'rgba(0, 0, 0, 0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: 
                        state == 2 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
                        
                    }}
                >
                    <Text style={{fontSize: 15, fontWeight:'700'}}>Pink Donut</Text>
                </Pressable>

                <Pressable
                    onPress={()=>{
                        setData([
                            ...array.filter((x) => {
                                return x.type =='F';
                            }),
                        ]);
                        setState(3);
                        }}
                    style={{
                    width: 100,
                    height: 35, 
                    borderWidth: 1, 
                    borderRadius: 4,
                    borderColor:'rgba(0, 0, 0, 0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: 
                        state == 3 ? "rgba(241, 176, 0, 1)" : "rgba(196, 196, 196, 0.12)",
                        
                    }}
                >
                    <Text style={{fontSize: 15, fontWeight:'700'}}>Floating</Text>
                </Pressable>
            </View>
        </View>
        <View>
            <FlatList
            numColumns={2}
                data={data}
                renderItem={({item})=>{
                    return(
                        <View  style={{width: 337, height: 115, backgroundColor: "rgba(244, 221, 221, 1)", borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-around", margin: 10, }}>
                            <Image source={item.img} style={{width:111, height:101}}/>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                                    {item.name}{" "}
                                </Text>
                                <Text style={{fontSize: 15,fontWeight: "700",color: "rgba(0, 0, 0, 0.54)",}}>           
                                    {item.description}{" "}
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                                    {item.price}{" "}
                                </Text>
                            </View>
                            <View
                                style={{
                                height: "100%",
                                justifyContent: "flex-end",
                                }}
                            >
                                <Pressable
                                    onPress={()=>{
                                    navigation.navigate('Screen2',item)
                                    }}
                                    style={styles.btnAdd}
                                >
                                <Image source={require("../assets/plus.png")} style={{ width: 15, height: 15,position:'absolute',top:20,left:-20}}/>            
                                </Pressable>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  btnAdd: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 45,
    borderRightWidth:0,
    borderBottomWidth: 45,
    borderLeftColor: "transparent",
    borderBottomColor: "rgba(241, 176, 0, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
});
