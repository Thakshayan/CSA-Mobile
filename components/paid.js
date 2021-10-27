import { Text, View, Button, TextInput } from "react-native";
import React from "react";


export default function Paid({paid}) {
    return (
        <View style={{borderBottomWidth:1,padding:5,paddingLeft:0,borderColor:'#babec3',alignItems:'center',justifyContent:'center'}}> 
            {paid ?<View style={{backgroundcolor:'#1de9b6',width:'100%',alignItems:'center',justifyContent:'center'}}>
                <Text style={{alignItems:'center',justifyContent:'center',color:'white'}}> Paid </Text>
            </View>:
            <View style={{backgroundColor:'#c04000',width:150,alignItems:'center',justifyContent:'center'}}>
                <Text style={{alignItems:'center',justifyContent:'center',color:'white'}}> Unpaid</Text>
            </View>}
        
      </View>
    );
  }