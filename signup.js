import React from "react";
import { Text,View,StyleSheet } from "react-native";
import Home from './home';
import Favourite from './fav';
import Profile from "./profile";
import Chat from "./chat";
import Wallet from "./wallet";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const style=StyleSheet.create(
  {
   selectop:
   {
    transform:[{translateY:"-40%"}],
    backgroundColor:'blue',
    width:70,
    height:70,
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    borderColor:"white",
    borderWidth:5
   },
   selecback:
   {
    transform:[{translateY:"-10%"}],
   },
   back:
   {
    backgroundColor:'cyan',
    width:"250%",
    height:'120%',
    borderRadius:35,
    borderWidth:2,
    borderColor:'grey'
   }
  }
);
export default function SignUp()
{
  const Tab=createMaterialTopTabNavigator();
  const Tab1=createBottomTabNavigator();
  return(
   /* <Tab.Navigator
    tabBarPosition="bottom"
    screenOptions={({route})=>
    ({
      tabBarIcon:({focused,color})=>
      {
       let iconName;
      if(route.name=='Home') iconName="home";
      else if(route.name=="Favourite") iconName="heart";
      else if(route.name=="Chat") iconName="chatbox-ellipses";
      else if(route.name=="Wallet") iconName="wallet";
      else if(route.name=="Profile") iconName="person-circle";      
      
      
        if (focused) {
          return null;
        }
        else
        {
          return(
        <View >
          <Ionicons  name={iconName} size={35} color={'blue'}/>
        </View>
           )
        }
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor:'Red',
      tabBarInactiveTintColor:'black',
      tabBarStyle:
      {
        margin:"4%",
        borderRadius:20,
      },
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>*/
    <Tab1.Navigator
    screenOptions={({route})=>(
      {
        tabBarIcon:({focused})=>
        {
          let iconName;
      if(route.name=='Home') iconName="home";
      else if(route.name=="Favourite") iconName="heart";
      else if(route.name=="Chat") iconName="chatbox-ellipses";
      else if(route.name=="Wallet") iconName="wallet";
      else if(route.name=="Profile") iconName="person-circle";

          return(
            <View style={focused && style.selectop}>
            <Ionicons name={iconName} size={focused ? 40:30} color={focused ? "white":"white"} />
            </View>
            
          );
        },
      headerShown:false,
      tabBarShowLabel:false,
      tabBarActiveTintColor:'blue',
      tabBarInactiveTintColor:'black',
      tabBarStyle:
      {
        margin:"4%",
        borderRadius:20,
        backgroundColor:'blue'
      },
      }
    )}>
      <Tab1.Screen name="Home" component={Home} />
      <Tab1.Screen name="Favourite" component={Favourite} />
      <Tab1.Screen name="Chat" component={Chat} />
      <Tab1.Screen name="Wallet" component={Wallet} />
      <Tab1.Screen name="Profile" component={Profile} />   
       </Tab1.Navigator>
  );
}