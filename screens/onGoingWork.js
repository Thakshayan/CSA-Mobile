import { Text, View, Button, TextInput, ScrollView,StyleSheet,useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import WorkCard from "../components/workCard";
import {MaterialIcons} from '@expo/vector-icons';
import SearchBar from "../components/searchBar";
import Pagination from "../components/pagination";
import Rating from "../components/rating";

import { useQuery } from "@apollo/client";
import { GET_ONGOINGWORK,GET_ONGOINGWORKS } from "../GraphQL/Queries";

import Loading from "../components/loading";
import Empty from "../components/empty";


export default function OnGoingWork({navigation}) {

  const width = useWindowDimensions().width * 0.3;
  const height = useWindowDimensions().height*0.4
  const [contents,setContents] = useState([]);

  const [page,setPage] = useState(1);
  const [offSet,setOffSet] = useState();
  const [id,setID] = useState()

  const fetchContent = useQuery(GET_ONGOINGWORK,{
    variables:{
      workerId:id
    }
  })

  const {error,loading,data} = useQuery(GET_ONGOINGWORKS,{
        variables:{
            page:page,
            offset:3
        }
    });
  const [content,setContent] = useState([])

  useEffect(()=>{
    console.log(data)
    if(data){
        setContent(data.worker_getMyOngoingWorks)
        setContents(data.worker_getMyOngoingWorks)
    }
  },[data])

  useEffect(() => {
    
    if(id){
      fetchContent.refetch({
          workerId:id
        
      }).then(async (datas) =>{
        await setContent([datas.worker_SearchMyOngoingWorks])
        
      })
    }else if (contents){
      setContent(contents)
    }

  }, [id])



    return (
     
      <View style={{flex:1}}>
        
        <SearchBar placeholder="Enter work ID ..." id={id} setId={setID}/>
       
        <ScrollView > 
          <View >
            {!loading || data ?
              <View style={{ fontSize: 24,padding:10 }}>
                {content[0] && data ?
                  <View>
                    { content.map( e =>{
                      return <WorkCard
                                id={e.appointment_id}
                                title = {`Estimation: ${e.duration} `}
                                description = {e.booking.description}
                                navigation={navigation}
                                key = {e.appointment_id}
                              />
                    })}

                    <View >
                      <Pagination setPage={setPage} page={page} offSet={offSet}/>
                    </View>
                  </View>:
                    <Empty message="No Work Available"/>
                  }       
                </View>:
                <Loading/>
              }
            </View> 
        </ScrollView>  
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
      width:250
    
    },
    icon:{
      
      color: 'white',
    
    }
  })