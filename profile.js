import React from "react";
import { Text,FlatList,StyleSheet,View,useWindowDimensions,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const style=StyleSheet.create(
    {
        top:
        {
            width:'100%',
            height:'9%',
            backgroundColor:'blue',
            justifyContent:'center',
            alignItems:'center'
        },
        profile:
        {
            alignSelf:'flex-end',
            marginRight:"8%"
        },
        logo:
        {
         transform:[{translateY:'50%'}],
         zIndex:5,
         backgroundColor:'white',
         borderRadius:150
        },
        page1:
        {
            width:'100%',
            height:'25%',
            backgroundColor:'cyan',
            justifyContent:'center',
            alignItems:'center',
        },
        page2:
        {
            width:'100%',
            height:'65%',
            backgroundColor:'white',
            justifyContent:'space-around',
            alignItems:'center'
        },
        option:
        {
            width:'80%',
            height:'10%',
            flexDirection:'row',
            alignItems:'center',
        },
        text:
        {
            fontSize:22,
            fontWeight:'900'
        },
        arrow:
        {
            position:'absolute',
            transform:[{translateX:'1000%'}]
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
        <View style={[style.page1]}>
        <Ionicons style={style.logo} name={"person-circle"} size={150} color={"black"} />
        </View>
        <View style={style.page2}>
         <View style={{ width:'80%',height:'10%',backgroundColor:'white',borderRadius:20}}>  </View>
         <View style={{ width:'80%',height:'10%',backgroundColor:'white',borderRadius:20}}>  </View>
        <View style={style.option}>
            <Ionicons style={style.profile} name={"settings"} size={35} color={"black"} />
            <Text style={style.text}>Profile</Text>
            <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={style.option}>
            <Ionicons style={style.profile} name={"person-circle"} size={35} color={"black"} />
            <Text style={style.text}>personal Details</Text>
            <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={style.option}>
            <Ionicons style={style.profile} name={"lock-closed"} size={35} color={"black"} />
            <Text style={style.text}>password and security</Text>
            <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={style.option}>
            <Ionicons style={style.profile} name={"notifications"} size={35} color={"black"} />
            <Text style={style.text}>Notifications</Text>
            <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={style.option}>
            <Ionicons style={style.profile} name={"log-out"} size={35} color={"black"} />
            <Text style={style.text}>Log Out</Text>
            <Ionicons style={style.arrow} name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={//style.option
        {width:'80%',height:'10%',backgroundColor:'white',borderRadius:20}}>
            <Text></Text>
        </View>
        <View style={//style.option
        {width:'80%',height:'10%',backgroundColor:'white',borderRadius:20}}>
            <Text></Text>
        </View>
        </View>
        </View>
    );
}