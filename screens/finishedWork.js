import { Text, View, Button, TextInput, ScrollView,StyleSheet,useWindowDimensions } from "react-native";
import React from "react";
import WorkCard from "../components/workCard";
import {MaterialIcons} from '@expo/vector-icons';
import SearchBar from "../components/searchBar";
import Pagination from "../components/pagination";
import Rating from "../components/rating";


export default function FinishedWork({navigation}) {

  const width = useWindowDimensions().width * 0.3;

    return (
     
      <View style={{flex:1}}>
       
          <SearchBar/>
       
          <ScrollView >
       <View>
        <View style={{ fontSize: 24,padding:10 }}>
          <WorkCard
            id="ID100"
            title = {<Rating rating={3}/>}
            description = "This is a notification a bout the work stage"
            navigation={navigation}
          />
          <WorkCard
            id="ID100"
            title = {<Rating rating={4}/>}
            description = "This is a notification a bout the work stage"
            navigation={navigation}
          />
           <WorkCard
            id="ID100"
            title = {<Rating rating={1}/>}
            description = "This is a notification a bout the work stage"
            navigation={navigation}
          />
        </View>
        
        <Pagination/>

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