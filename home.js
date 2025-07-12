import React from "react";
import { Text,FlatList,StyleSheet,View,useWindowDimensions,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const style=StyleSheet.create(
    {
        page:
        {
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:"blue",
            marginTop:'1%'
        },
        slide:
        {
         height:'30%',
         width:'90%',
         alignSelf:'center',
         borderRadius:20
        },
        top:
        {
            width:'100%',
            height:'9%',
            backgroundColor:'blue',
            justifyContent:'center',
            alignItems:'center'
        },
        offer:
        {
            width:'90%',
            height:'3%',
            borderRadius:30,
            backgroundColor:'blue',
            alignSelf:'center',
            marginTop:'1%'
        },
        cat:
        {
            width:'90%',
            height:'15%',
            backgroundColor:'blue',
            borderRadius:10,
            alignSelf:'center',
            marginTop:'1%'
        },
        cat2:
        {
            width:'44%',
            height:'100%',
            backgroundColor:'blue',
            borderRadius:10,
            alignSelf:'center',
            marginTop:'1%',
            marginRight:'1%'
        },
        item:
        {
            width:"89.8%",
            height:'13%',
            alignSelf:'center',
            marginTop:'1%',
            borderRadius:10,
            marginRight:'1%'
        },
        items:
        {
            borderRadius:10,
            backgroundColor:'blue',
        },
        profile:
        {
            alignSelf:'flex-end',
            marginRight:"8%"
        }
    }
);
export default function Home()
{
    const {width,height}=useWindowDimensions();
    const ITEM_WIDTH=width*0.9/3;
    const PAGE_WIDTH=width*0.9;
    const info=[
        {page:"one",Image:"person-circle"},
        {page:"two",Image:"person-circle"},
        {page:"three",Image:"person-circle"},
        {page:"four",Image:"person-circle"},
        {page:"five",Image:"person-circle"},
        {page:"six",Image:"person-circle"},
        {page:"seven",Image:"person-circle"},
    ]
    return(
        <View>
        <View style={style.top}>
        <Ionicons style={style.profile} name={"person-circle"} size={50} color={"white"} />
        </View>
        <View style={style.offer}>
        </View>
        <FlatList
            data={info}
            snapToInterval={PAGE_WIDTH}
            decelerationRate="fast"
            renderItem={({item})=>{
                return(
                <View style={[style.page,{width:PAGE_WIDTH}]}>
                <Text style={{fontSize:50,color:'white'}}>{item.page}</Text>
                </View>
                );
            }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={style.slide}
        />
        <View style={style.cat}>
        </View>
        <View style={{flexDirection:'row',height:'15%',alignSelf:'center'}}>
        <View style={[style.cat2]}>
        
        </View>
        <View style={[style.cat2,{marginLeft:'1%'}]}>
         
        </View>
        </View>
        <FlatList
        style={style.item}
            data={info}
            snapToInterval={ITEM_WIDTH}
            renderItem={({item})=>{
                return(
                <View style={[style.items,{width:ITEM_WIDTH}]}>
                <View style={{flexDirection:'row'}}>
                <Ionicons name={item.Image} size={40} color={"white"} />
                <Text style={{alignSelf:'center',fontSize:20,color:'white',fontWeight:'bold'}}>{item.page}</Text>
                </View>
                </View>
                );
            }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        />
       <FlatList
        style={style.item}
            data={info}
            snapToInterval={ITEM_WIDTH}
            renderItem={({item})=>{
                return(
                <View style={[style.items,{width:ITEM_WIDTH}]}>
                <View style={{flexDirection:'row'}}>
                <Ionicons name={item.Image} size={40} color={"white"} />
                <Text style={{alignSelf:'center',fontSize:20,color:'white',fontWeight:'bold'}}>{item.page}</Text>
                </View>
                </View>
                );
            }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}