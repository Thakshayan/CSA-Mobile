import { Text, View, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import React,{useState} from "react";
import { TouchableOpacity } from "react-native";

import Card from "../components/card";

export default function Pagination({page,setPage,offSet}) {

  const [disable,setDisable] = useState(true);
    const [offDisable,setOffDisable] = useState(false);

    const decrement = ()=>{
        if(page > 0){
        setPage(page-1)
        check(page)
        }else{
            setDisable(true)
        }
        
        
    }

    const check = (page) =>{
        console.log(page)
        if(page<=0){
            setDisable(true); 
            
        }
        if(page>=0 && page < offSet+1){
            setDisable(false); 
            setOffDisable(false);
        }

        if(page > offSet+1){
            setOffDisable(true);
            
        }
    }

    const increment = ()=>{
        if(page < offSet-1){ 
        setPage(page+1)
        check(page)
        }else{
            setOffDisable(true)
        }
        
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity  
              style={[styles.button,styles.leftButton]} 
              disable={disable}
              onPress={decrement}
              > 

                <Text style={{color:"white"}}> Previous </Text>

            </TouchableOpacity>
            <TouchableOpacity  
              style={[styles.button,styles.rightButton]} 
              disable={offDisable}
              onPress={increment}>
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
