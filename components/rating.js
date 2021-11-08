import { Text, View, Button, TextInput } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';


export default function Rating({rating}) {

    var stars =[]

    for(var i=0;i<rating;i++){
        stars.push(<AntDesign name="star" size={30} color="#ffc107" key={i}/>)
    }

    for(var i=0;i<(5-rating);i++){
        stars.push(<AntDesign name="star" size={30} color="white" key={rating+i}/>)
    }
    
   
    return (
      <View style={{flexDirection:'row'}}>
          {stars} 
        <View >
            <Text style={{marginLeft:8,color:'white',marginTop:4,fontSize:18}}>{rating}</Text>
        </View>    
      </View>
    );
  }