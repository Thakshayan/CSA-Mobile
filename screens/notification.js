import { Text, View, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import Card from "../components/card";
import Pagination from "../components/pagination";

export default function NotificationsScreen({navigation}) {
  
    return (
      <ScrollView>
        <View style={{backgroundColor:"#3f4d67",width:'100%',height:40,alignItems:'center',justifyContent:'center'}}>
          {/* <Text style={{color:'white',fontSize:18,marginTop:10}}>My Notification</Text> */}
        </View>
      <View style={{ margin:10,marginTop:10 }}>
        <Card state={true} id={"ID001"} navigation={navigation}/>
        <Card state={false} id={"ID001"} navigation={navigation}/>
        <Card state={true} id={"ID001"} navigation={navigation}/>
        <Card/>
        <Card/>
        
      </View>
       <Pagination/>
      </ScrollView>
    );
  }


  const styles = StyleSheet.create({
    button:{
      
      alignItems:"center",
      justifyContent:"center",
      
      backgroundColor:"#3f4d67",
      paddingVertical:10,
      // borderRadius:23,
      color:"white"
    }
  })
