import { Text, View, Button, TextInput,StyleSheet,TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { CONFIRM_FINISH } from "../GraphQL/Mutation";
import { useMutation } from "@apollo/client";


export default function WorkFinishCard({id, state}) {

  const [FinishAppointmentMutation,{loading,error}] = useMutation(CONFIRM_FINISH)

  const finishWork = ()=>{
   
    FinishAppointmentMutation({
      variables:{
        workId:id
      }
    })
    
  }

  

  // useEffect(()=>{
  //   console.log(state)
  // },[])

    return (
        <View >
        <View style={[styles.shadow,styles.elevation]}>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'black',fontSize:15}}>
                        Work Status
                    </Text>
                    <MaterialIcons name="call-to-action" size={24} color="#2cbe96" style={{marginLeft:10,width:50}}/>
                </View>
                {state === 'going' ?<Text style={{color:'#797d7c'}}>
                    Pending ...
                </Text>:
                <Text style={{color:'#797d7c'}}>
                    Finished
                </Text>}
            </View>
            {!loading ?<View>
              {state === 'going' ?<TouchableOpacity  style={styles.button} onPress={finishWork}> 
                <Text style={{color:"white"}}> Confirm Finish </Text>
              </TouchableOpacity> :
              <TouchableOpacity  style={styles.button} disabled={true}> 
                <Text style={{color:"white"}}> Finished </Text>
              </TouchableOpacity>}
            </View>:
            <View>
              <TouchableOpacity  style={styles.button} disabled={true}> 
                <Text style={{color:"white"}}> Processing </Text>
              </TouchableOpacity>
            </View>}
        </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    shadow: {  
    
      
      overflow: 'hidden',
      shadowColor: 'black',
      shadowRadius: 5,
      shadowOpacity: 1,
      paddingLeft:20,
      paddingTop:10,
      paddingBottom:10,
      width:"100%",
      borderRadius: 5,
      // backgroundColor:'#E0FFFF',
      paddingRight:10,
      marginBottom:10
    },
    elevation: {
      elevation: 3,
      shadowColor: '#52006A',
    },
    button:{
      marginHorizontal:5,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      //backgroundColor:"#3f4d67",
      paddingVertical:5,
      paddingRight:30,
      paddingLeft:30,
      borderRadius:10,
      color:"white",
      backgroundColor:"#2cbe96",
      
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    state:{
      width:10,
      height:10,
      backgroundColor:'rgb(29, 233, 182)',
      borderRadius:5,
      bottom:-5,
      marginRight:10
    }
});