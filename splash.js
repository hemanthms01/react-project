import {React,useEffect} from "react";
import {Text} from 'react-native';
export default function Splash({navigation})
{
  useEffect(()=>
{
    const timer=setTimeout(() => {
        navigation.replace('SignUp');
    }, 1000);
    return()=>clearTimeout(timer);
},[]);
    return(
        <Text style={{fontSize:40,textAlign:'center',alignItems:'center',justifyContent:'center'}}>Splash Page</Text>
    );
}