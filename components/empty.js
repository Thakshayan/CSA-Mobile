import { Text, View, Button, TextInput } from "react-native";
import React from "react";


export default function Empty({ message }) {
    
    return (
        <View style={{alignItems:'center',justifyContent:'center',height:200,marginTop:75,borderWidth:1,borderStyle:'dashed',borderRadius:2}}>
            <Text>
              {message}
            </Text>
          </View>
    );
  }