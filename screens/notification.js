import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import Card from "../components/card";
import Pagination from "../components/pagination";
import { GET_NOTIFICATIONS } from "../GraphQL/Queries";
import Loading from "../components/loading";

export default function NotificationsScreen({navigation}) {

  const [page,setPage] = useState(1);
  const [offSet,setOffSet] = useState();

  const {error,loading,data} = useQuery(GET_NOTIFICATIONS,{
    variables:{
        page:page,
        offset:3
    }
  });

  const Count = (objects) => {
    if(!objects){
      return 0
    }

    var count = 0

    for(var i=0;i<objects.length;i++){
      
        count += objects[i].Count 
      }

      return count
    }

  

  const [content,setContent] = useState([])

  useEffect(()=>{

    if(data){

        setContent(data.worker_getMyNotification)
        setOffSet(Count(data.getCountNotification)/3)
    }
  },[data])
  
    return (
      <View style={{flex:1,height:'100%'}}>
      <ScrollView>
        <View style={{backgroundColor:"#3f4d67",width:'100%',height:40,alignItems:'center',justifyContent:'center'}}>
        </View>
        {
      content[0] ? 
      
        <View style={{ margin:10,marginTop:10 }}>
       
        
          {content.map(e =>{
            console.log(e._id)
            return <Card 
              state={e.state} 
              id={e._id} 
              message = {e.message}
              date = {e.date}
              navigation={navigation}
              key={e._id}/>
          })}
          
          
        
      </View>

       : <Loading/> }
      
      </ScrollView>
      {content[0] ?
        <Pagination setPage={setPage} page={page} offSet={offSet}/>  
        :
        null
      }
      </View>
    );
  }


  const styles = StyleSheet.create({
    button:{ 
      alignItems:"center",
      justifyContent:"center",  
      backgroundColor:"#3f4d67",
      paddingVertical:10,
      color:"white"
    }
  })
