import React from "react";
import { Text,FlatList,StyleSheet,View,useWindowDimensions,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const style=StyleSheet.create(
    {
        top:
        {
            width:'100%',
            height:'8.5%',
            backgroundColor:'blue',
            justifyContent:'center',
            alignItems:'center'
        },
        profile:
        {
            alignSelf:'flex-end',
            marginRight:"8%"
        },
        item:
        {
            width:'90%',
            alignSelf:'center'
        },
        items:
        {
            height:100,
            marginTop:'1%',
            backgroundColor:'blue',
            borderRadius:20
        }
    }
);
export default function Favourite()
{
    const info=[
                {page:"one",Image:"person-circle"},
                {page:"two",Image:"person-circle"},
                {page:"three",Image:"person-circle"},
                {page:"four",Image:"person-circle"},
                {page:"five",Image:"person-circle"},
                {page:"six",Image:"person-circle"},
                {page:"seven",Image:"person-circle"},
            ]
        const {height}=useWindowDimensions();
        const HEIGHT=height*0.8/5;
    return(
        <View>
        <View style={style.top}>
        <Ionicons style={style.profile} name={"person-circle"} size={50} color={"white"} />
        </View>
        <FlatList
            style={style.item}
            data={info}
            snapToInterval={HEIGHT}
            renderItem={(item)=>
            {
                return(
                    <View style={[style.items,{height:HEIGHT}]}>
                    <Text style={{color:'white'}}>{item.page}</Text>
                    <Ionicons name={item.Image} size={40} color={"white"} />
                    </View>
                );
            }}
            pagingEnabled
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}