import { Text, View, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import React,{useEffect, useState} from "react";
import { TouchableOpacity } from "react-native";

import Card from "../components/card";

export default function Pagination({page,setPage,offSet}) {

  const [disable,setDisable] = useState(false);
    const [offDisable,setOffDisable] = useState(false);

    useEffect(()=>{
        check(page)
    },[])

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
        if(page < offSet){ 
        setPage(page+1)
        check(page)
        }else{
            setOffDisable(true)
        }
        
    }

    return (
        <View style={styles.container}>
            {page > 1 ?
            <View>
            <TouchableOpacity  
              style={[styles.button,styles.leftButton]} 
            //   disable={disable}
              onPress={decrement}
              > 

                <Text style={{color:"white"}}> Previous </Text>

            </TouchableOpacity>
            </View>
            : 
             <TouchableOpacity/>
            }
            {page < offSet ?
            <View>
            <TouchableOpacity  
              style={[styles.button,styles.rightButton]} 
            //   disable={offDisable}
              onPress={increment }>
              <Text style={{color:"white"}}> Next </Text>

            </TouchableOpacity>
            </View>
            :
                null
            }
        </View>

    );
  }


  const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'space-between',
        padding:10,
        flexDirection:'row',
        flex:1
    },
    leftButton:{
        
        width:100,
        left:0,
        
        borderTopRightRadius:23,
        borderBottomRightRadius:23
    },
    rightButton:{
        
        width:100,
        right:0,
        
        borderTopLeftRadius:23,
        borderBottomLeftRadius:23
    },
    button:{
      
      alignItems:"center",
      //justifyContent:'space-between',
      
      backgroundColor:"#3f4d67",
      paddingVertical:10,
      // borderRadius:23,
      color:"white"
    }
  })
