import { Text, View, Button, TextInput } from "react-native";
import React from "react";


export default function CardContent({title,value}) {
    return (
        <View style={{borderBottomWidth:1,marginBottom:3,borderColor:'#babec3',overflow:'scroll'}}> 
        <View style={{padding:10}}>
          <Text style={{paddingTop:10}}> {title} :</Text>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{paddingTop:10,overflow:'scroll'}}> {value}</Text>
          </View>
        </View>
      </View>
    );
  }