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
            alignItems:'center',
        },
        profile:
        {
            alignSelf:'flex-end',
            marginRight:"8%"
        },
        back:
        {
            height:'100%',
            width:'100%',
            backgroundColor:"#142bdb",
            alignSelf:'baseline'
        },
        chart:
        {
            width:'100%',
            height:'65%',
            backgroundColor:'white',
            borderTopRightRadius:20,
            borderTopLeftRadius:20
        },
        box:
        {
            width:'80%',
            height:'12%',
            backgroundColor:'#ff9008',
            alignSelf:'center',
            borderRadius:10,
            transform:[{translateY:30}],
            position:'relative',
            zIndex:2
        },
        icon:
        {
            marginBottom:'4%',
            color:'white'
        },
        line1:
        {
            height:'70%',
            width:'45%',
        },
        line2:
        {
            height:'70%',
            width:'45%',
        }
    }
);
export default function Wallet()
{
    return(
        <View style={{flex: 1, overflow: 'hidden', }}>
        <View style={style.top}>
        <Ionicons style={style.profile} name={"person-circle"} size={50} color={"white"} />
        </View>
        <View style={[style.back,{flex: 1, overflow: 'hidden',justifyContent:'flex-end'}]}>
        <View style={{width:'100%',height:'20%',justifyContent:'space-evenly',marginLeft:'10%'}}>
            <Text style={{color:'white',fontWeight:'900',fontSize:20,fontStyle:'sans-serif-condensed'}}>Current Balance :</Text>
            <Text style={{color:'white',fontWeight:'900',fontSize:20,fontStyle:'sans-serif'}}>Refferals :</Text>
            <Text style={{color:'white',fontWeight:'900',fontSize:20,fontStyle:'sans-serif'}}>Last Recharge :</Text>

        </View>
        <View style={[style.box,{justifyContent:'center',flexDirection:'row',justifyContent:"space-evenly",alignItems:'center',}]}>
        <View style={{justifyContent:"center",alignItems:'center'}}>
            <Text style={[style.icon,{fontSize:30,marginTop:'-7%'}]}>₹</Text>
            <Text style={{color:'white',fontWeight:'900',transform:[{translateY:'-20%'}]}}>Recharge</Text>
        </View>
        <View style={{justifyContent:"center",alignItems:'center'}}>
            <Ionicons style={style.icon} name='arrow-undo-circle' size={30} color='white'/>
            <Text style={{color:'white',fontWeight:'900'}}>Refer</Text>
        </View>
        <View style={{justifyContent:"center",alignItems:'center'}}>
            <Ionicons style={style.icon} name='mail-open' size={30} color='white'/>
            <Text style={{color:'white',fontWeight:'900'}}>Card Details</Text>
        </View>
        </View>
        <View style={[style.chart,{borderTopRightRadius:50,borderTopLeftRadius:50,flexDirection:'row',alignItems:'center',justifyContent:'center',justifyContent:'space-evenly',paddingLeft:'3%'}]}>
        <View style={[style.line1,{alignItems:'center',justifyContent:'center',flexDirection:'column',justifyContent:'space-around'}]}>
        <View style={{width:'100%',height:'25%',backgroundColor:'cyan',alignItems:"flex-start",justifyContent:'center',borderRadius:20,flexDirection:'row',alignItems:"center",justifyContent:"space-around"}}>
        <Text  style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>Order Details</Text>
        <Ionicons name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={{width:'100%',height:'25%',backgroundColor:'cyan',alignItems:"flex-start",justifyContent:'center',borderRadius:20,flexDirection:'row',alignItems:"center",justifyContent:"space-around"}}>
        <Text style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>Card Details</Text>
        <Ionicons name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={{width:'100%',height:'25%',backgroundColor:'cyan',alignItems:"flex-start",justifyContent:'center',borderRadius:20,flexDirection:'row',alignItems:"center",justifyContent:"space-around"}}>
        <Text style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>Order History</Text>
        <Ionicons name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        </View>
            
        <View style={[style.line2,{alignItems:'center',justifyContent:'center',justifyContent:'space-around'}]}>
        <View style={{width:'100%',height:'26%',backgroundColor:'cyan',alignItems:"flex-start",justifyContent:'center',borderRadius:20,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <View style={{alignItems:"flex-start",justifyContent:'center'}}>
        <Text style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>Recharge </Text>
        <Text style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>History</Text>
        </View>
        <Ionicons name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={{width:'100%',height:'26%',backgroundColor:'cyan',alignItems:"flex-start",justifyContent:'center',borderRadius:20,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <View style={{alignItems:"flex-start",justifyContent:'center'}}>
        <Text style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>Share to </Text>
        <Text style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>Friend</Text>
        </View>
        <Ionicons name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        <View style={{width:'100%',height:'26%',backgroundColor:'cyan',alignItems:"flex-start",justifyContent:'center',borderRadius:20,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <View style={{alignItems:"flex-start",justifyContent:'center'}}>
        <Text style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>Transaction</Text>
        <Text style={{fontWeight:'900',color:'black',fontSize:15,paddingLeft:'10%'}}>History</Text>
        </View>
        <Ionicons name={'chevron-forward'} size={30} color={'black'}/>
        </View>
        </View>
        <View>

        </View>
        </View>
        </View>
        </View>
    );
}