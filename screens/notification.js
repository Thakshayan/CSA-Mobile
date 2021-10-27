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

  const [content,setContent] = useState([])

  useEffect(()=>{
    console.log(data)
    if(data){
        setContent(data.worker_getMyNotification)
    }
  },[data])
  
    return (
      <ScrollView>
        <View style={{backgroundColor:"#3f4d67",width:'100%',height:40,alignItems:'center',justifyContent:'center'}}>
          {/* <Text style={{color:'white',fontSize:18,marginTop:10}}>My Notification</Text> */}
        </View>
        {
      content[0] ? 
      
        <View style={{ margin:10,marginTop:10 }}>
       
        
          {content.map(e =>{
            return <Card 
              state={true} 
              id={"ID001"} 
              message = {e.message}
              date = {e.date}
              navigation={navigation}
              key={e._id}/>
          })}
          
          <Pagination setPage={setPage} page={page} offSet={offSet}/>  
        
      </View>

       : <Loading/> }
      
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
