import React, { useEffect, useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, ScrollView } from "react-native";

import Icon from '@expo/vector-icons/AntDesign';
import Chart from "../components/pieChart";
import Rating from "../components/rating";
import { useQuery } from "@apollo/client";
import { GET_WORKSTAT } from "../GraphQL/Queries";
import Loading from "../components/loading";
import { SafeAreaView } from "react-native";

export default function HomeScreen({ navigation }) {


    const {error,loading,data} = useQuery(GET_WORKSTAT);
    const [content,setContent] = useState()
    const [rating,setRating] = useState()

    const workCount = (objects) =>{
      if (!objects){
          return [0,0,0]
      }

      var work  =[0,0,0]

      objects.map((object)=>{
        
          if(object._id === 'finished'){
            work[0] = object.Count
          }else if(object._id === 'going'){
            work[1] = object.Count
          }else if(object._id === 'open'){
            work[2] = object.Count
          }
      })     
      return work
      
  }

    useEffect(()=>{
        if(data){
          console.log(data)
          setContent(data.worker_workStats)
          //setRating(data.worker_me.rating)
        }
    },[data])
    
    return (
      <View style={{flex:1}}>
      <ScrollView>
        <SafeAreaView>
      {content?<View style={{flex:1,height:'100%'}}>
        
          <View style={{margin:5}}>
            <View style={[styles.shadow,styles.elevation]}>
              <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}>
                <Text style={{fontSize:22,fontStyle:'italic',textDecorationLine:'underline'}}>
                  My Job Summary
                </Text>
              </View>
              <Chart value={workCount(content)}/>
            </View>

        
          </View>
          <View style={{backgroundColor:'#3f4d67',height:10,width:'100%'}}/>
          
    </View>
    :
      <Loading/>
    }
    </SafeAreaView>
    </ScrollView>
    {
          rating ?
          <View style={{width:'100%',alignItems:'center',justifyContent:'center',padding:30,bottom:0,position:'absolute',backgroundColor:'#3f4d67'}}>
            <Rating
              rating={rating}
            />
          </View>
        :
          null
        }
    </View>
            // <Button
            //   title="Sign In"
            //   style={{
            //     alignSelf:"center",
            //     color:"#3f4d67",
                
            //     paddingVertical:30
            // }}
             
            //   onPress={() => {
                
                
            //     // navigation.openDrawer();
            //   }}
            // />
    )
    
  }

  const styles = StyleSheet.create({
    shadow: {     
      shadowColor: 'black',
      shadowRadius: 5,
      shadowOpacity: 1,
      paddingTop:10,
      paddingBottom:10,
      width:"100%",
      borderRadius: 10,
      paddingRight:10,

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
    
});