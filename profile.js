import React from "react";
import { Text,FlatList,StyleSheet,View,useWindowDimensions,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const style=StyleSheet.create(
    {
        top:
        {
            width:'100%',
            height:'30%',
            backgroundColor:'blue',
            justifyContent:'center',
            alignItems:'center'
        },
        profile:
        {
            alignSelf:'flex-end',
            marginRight:"8%"
        }
    }
);
export default function Profile()
{
    return(
        <View>
        <View style={style.top}>
        <Ionicons style={style.profile} name={"person-circle"} size={50} color={"white"} />
        </View>
        </View>
    );
}