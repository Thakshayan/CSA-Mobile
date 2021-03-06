import { Text, View, Button, TextInput, ScrollView,StyleSheet,useWindowDimensions } from "react-native";
import React from "react";
import WorkCard from "../components/workCard";
import {MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {

  const width = useWindowDimensions().width * 0.75;

    return (

    <View style={styles.container}>
        {/* <View style={styles.iconContainer}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </View> */}
        <View style={styles.inputContainer}>
        
          <TextInput
          style={[styles.input,{width:width}]}
          //onChangeText={onChangeNumber}
          //value={number}
          placeholder="Enter Work ID ...."
        //   keyboardType="numeric"
          />
        <View style={styles.iconContainer}>
            <MaterialIcons name='search'  size={24} style={styles.icon}/>
        </View>
          
      </View>
    </View>


    );
  }

  const styles = StyleSheet.create({
    input: {
      borderWidth:1,
      borderTopLeftRadius:30,
      borderBottomLeftRadius:30,
      padding:10,
      backgroundColor:'white',
      justifyContent:'space-between',
    
    },
    icon:{
      
      color: 'white',
    
    },
    container:{
        backgroundColor:'#3f4d67',
        height:80,
        paddingTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    iconContainer:{
        alignItems:'center',
        justifyContent:'center',
        paddingRight:10,
        paddingLeft:10,
        backgroundColor:'#3f4d67',
        borderBottomRightRadius:30,
        borderTopRightRadius:30
    },
    inputContainer:{
        borderWidth:2,
        margin:10,
        borderColor:'white',
        flexDirection:'row',
        borderRadius:30,
        backgroundColor:'white'
    }
  })