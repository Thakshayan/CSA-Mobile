import { Text, View, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";

export default function Card({state,id,message,date,navigation}){

  const formatDate = (date) =>{
    const date_ob = new Date(date);

    const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
    
    const formatted= `${date_ob.getDate()} ${monthNames[date_ob.getMonth()]} ${date_ob.getFullYear()}`

    return formatted
  }

    return(
    <View >
        <View style={[styles.shadow,styles.elevation]}>
            <View style={{flexDirection:'row'}}>
              {/* {state ?<View style={styles.state}></View>
              :<View style={[styles.state,{backgroundColor:'#c04000'}]}></View>} */}
              <Text style={styles.heading}>The booking: {state}</Text>
            </View>
            <Text> {message}</Text>
            <View style={{flexDirection:'row',alignItems:'stretch',justifyContent:'space-between',marginTop:10}}>
             
              <View style={{flexDirection:'row',paddingTop:15}}>
                {state !== 'open' ?<View style={styles.state}></View>
                :<View style={[styles.state,{backgroundColor:'#c04000'}]}></View>}
              
                <Text style={styles.heading}>{formatDate(date)} </Text>
          
                {/* <Text style={{color:'linear-gradient(-135deg, rgb(137, 159, 212) 0%, rgb(163, 137, 212) 100%)'}}>21 Sep 2012</Text> */}
              </View>
              <TouchableOpacity  style={styles.button}
                onPress={()=>{
                  //navigation.navigate('Work',{workId:id})
                }}
              > 
                <Text style={{color:"white"}}> View </Text>
              </TouchableOpacity>
            </View>
        </View>
        
      </View>

    )
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
      borderRadius: 10,
      // backgroundColor:'#E0FFFF',
      paddingRight:10,
      marginBottom:10
    },
    elevation: {
      elevation: 3,
      shadowColor: '#52006A',
    },
    heading:{
      opacity:0.6,
      marginBottom:5,
      fontWeight:'bold'
    },
    button:{
      marginHorizontal:5,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      backgroundColor:"#3f4d67",
      paddingVertical:5,
      paddingRight:30,
      paddingLeft:30,
      borderRadius:10,
      color:"white",
      
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