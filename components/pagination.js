import { Text, View, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import Card from "../components/card";

export default function Pagination() {
    return (
        <View style={styles.container}>
            <TouchableOpacity  style={[styles.button,styles.leftButton]}> 
              <Text style={{color:"white"}}> Previous </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.button,styles.rightButton]}> 
              <Text style={{color:"white"}}> Next </Text>
            </TouchableOpacity>
        </View>

    );
  }


  const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        padding:10,
        flexDirection:'row'
    },
    rightButton:{
        padding:20,
        width:100,
        borderTopRightRadius:23,
        borderBottomRightRadius:23
    },
    leftButton:{
        padding:20,
        width:100,
        borderTopLeftRadius:23,
        borderBottomLeftRadius:23
    },
    button:{
      
      alignItems:"center",
      justifyContent:"center",
      
      backgroundColor:"#3f4d67",
      paddingVertical:10,
      // borderRadius:23,
      color:"white"
    }
  })
