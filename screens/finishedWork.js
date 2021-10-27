import { Text, View, Button, TextInput, ScrollView,StyleSheet,useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import WorkCard from "../components/workCard";
import {MaterialIcons} from '@expo/vector-icons';
import SearchBar from "../components/searchBar";
import Pagination from "../components/pagination";
import Rating from "../components/rating";

import { useQuery } from "@apollo/client";
import { GET_FININISHEDWORK,GET_FININISHEDWORKS } from "../GraphQL/Queries";
import Paid from "../components/paid";
import Loading from "../components/loading";
import Empty from "../components/empty";


export default function FinishedWork({navigation}) {

  const width = useWindowDimensions().width * 0.3;
  const height = useWindowDimensions().height*0.4
  const [contents,setContents] = useState([]);

  const [page,setPage] = useState(1);
  const [offSet,setOffSet] = useState();
  const [id,setID] = useState()

  const fetchContent = useQuery(GET_FININISHEDWORK,{
    variables:{
      workerId:id
    }
  })

  const {error,loading,data} = useQuery(GET_FININISHEDWORKS,{
        variables:{
            page:page,
            offset:3
        }
    });
  const [content,setContent] = useState([])

  useEffect(()=>{
   
    if(data){
      console.log(data.worker_getMyFinishedWorks)
        setContent(data.worker_getMyFinishedWorks)
        setContents(data.worker_getMyFinishedWorks)
    }
  },[data])

  useEffect(() => {
    
    if(id){
      fetchContent.refetch({
          workerId:id   
      }).then(async (datas) =>{
        console.log(datas)
        await setContent(datas.data.worker_SearchMyFinishedWorks)
      })
    }else if (contents){
      setContent(contents)
    }

  }, [id])

    return (
     
      <View style={{flex:1}}>
       
       <SearchBar placeholder="Enter work ID ..." id={id} setId={setID}/>
       
       <ScrollView >   
        <View>
      
          {!loading || data ?
            <View style={{ fontSize: 24,padding:10 }}>
          
              {content[0] ? 
                <View>
                  {content.map( e =>{
                      return <WorkCard
                                id={e.appointment_id}
                                title = {<Paid paid={e.paid}/>}
                                description = {e.booking.description}
                                navigation={navigation}
                                key = {e.appointment_id}
                              />
                    })}
                <View >
                  <Pagination setPage={setPage} page={page} offSet={offSet}/>
                </View>
            </View>
          :
            <Empty message="No Finished Work Available"/>
          }

          </View> :
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