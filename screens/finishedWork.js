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

  const finishCount = (objects) => {
    if(!objects){
      return 0
    }

    for(var i=0;i<objects.length;i++){
      if (objects[i]._id ==="finished"){
        return objects[i].Count 
      }
    }

  }

  const fetchContent = useQuery(GET_FININISHEDWORK,{
    variables:{
      workerId:id
    }
  })

  const {error,loading,data} = useQuery(GET_FININISHEDWORKS,{
        variables:{
            page:page,
            offset:2
        }
    });
  const [content,setContent] = useState([])

  useEffect(()=>{
   
    if(data){
        console.log(data)
        setContent(data.worker_getMyFinishedWorks)
        setContents(data.worker_getMyFinishedWorks)
        setOffSet(finishCount(data.getCountAssignedAppointments)/2)
        
        
    }
  },[data])

  useEffect(() => {
    
    if(id){
      fetchContent.refetch({
          workerId:id   
      }).then(async (datas) =>{
   
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
      
          {!loading && content[0]?
            <View style={{ fontSize: 24,padding:10 }}>
          
              {content[0] ? 
                <View>
                  {content.map( e =>{
                      return <WorkCard
                                id={e.appointment_id}
                                title = {<Paid paid={e.paid}/>}
                                description = {e.booking.description}
                                navigation={navigation}
                                key = {e._id}
                              />
                    })}
                <View >
                  {content[0] ? 
                    <Pagination setPage={setPage} page={page} offSet={offSet}/>
                  :
                    null
                  }
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