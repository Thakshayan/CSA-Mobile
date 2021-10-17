import { Text, View, Button, TextInput, ScrollView,StyleSheet,useWindowDimensions } from "react-native";
import React from "react";
import WorkCard from "../components/workCard";
import {MaterialIcons} from '@expo/vector-icons';
import SearchBar from "../components/searchBar";
import Pagination from "../components/pagination";


export default function WorkList() {

  const width = useWindowDimensions().width * 0.3;

    return (
      <ScrollView>
      <View >
       
          <SearchBar/>
       
        
       <View>
        <View style={{ fontSize: 24,padding:10 }}>
          <WorkCard
            id="ID100"
            title = "Estimation: 10 days"
            description = "This is a notification a bout the work stage"
          />
          <WorkCard
            id="ID100"
            title = "Estimation: 10 days"
            description = "This is a notification a bout the work stage"
          />
           <WorkCard
            id="ID100"
            title = "Estimation: 10 days"
            description = "This is a notification a bout the work stage"
          />
        </View>
        
        <Pagination/>

        </View>
       
        
      </View>
      </ScrollView>
      
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