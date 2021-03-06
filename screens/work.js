import { Text, View, Button, TextInput, ScrollView,StyleSheet,useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import CardContent from "../components/cardContent";
import WorkFinishCard from "../components/workFinishCard";

export default function WorkScreen({route,navigation}) {

  const width = useWindowDimensions().width * 0.3;

  useEffect(()=>{
    console.log(route.params.workId)
  },[route])

    return (

        <View style={{flex:1}}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress = {() =>{
                navigation.goBack();
              }}

              
            >
            <View style={{flexDirection:'row',padding:15,marginTop:15}}>
              <AntDesign name="left" size={24} color="white" />
              {/* <AntDesign name="arrowleft" size={24} color="white" style={styles.headerIcon}/> */}
              <Text style={{color:'white',fontSize:18}}>Back</Text>
            </View>
            </TouchableOpacity>

            {/* <Text style={styles.headerContent}>
              Work ID : ID0010000000000
            </Text>*/}

          </View> 
        
        <ScrollView style={{padding:10,}} >

        <WorkFinishCard/>

        <View style={[styles.shadow,styles.elevation,{borderWidth:1,borderColor:'#3f4d67'}]}>
          
          <View style={{flexDirection:'row',marginTop:20,paddingBottom:20,borderBottomWidth:2,borderColor:'#babec3'}}>
            <View style={{height:20,width:8,backgroundColor:'blue'}}>

            </View>
            <Text style={{marginLeft:50,fontSize:15}}>
              Work Info
            </Text>
          </View>

          {(route.params) ?<CardContent
              title="Work ID"
              value={route.params.workId}
          />:null}

          <CardContent
              title="Ordered Date"
              value="21/12/2012"
          />

          <CardContent
              title="Title"
              value="Construction Work"
          />

          <CardContent
              title="Description"
              value="This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. "
          />

          <CardContent
              title="Address"
              value="This is a sample Address"
          />


          
          <View style={{height:20}}></View>
          
           

        </View>
        
        {/* </ScrollView>

        <ScrollView style={{padding:10,}}> */}
        <View style={[styles.shadow,styles.elevation,{borderWidth:1,borderColor:'#3f4d67'}]}>
          
          <View style={{flexDirection:'row',marginTop:20,paddingBottom:20,borderBottomWidth:2,borderColor:'#babec3'}}>
            <View style={{height:20,width:8,backgroundColor:'blue'}}>

            </View>
            <Text style={{marginLeft:50,fontSize:15}}>
              Customer Info
            </Text>
          </View>

          <CardContent
              title="Work ID"
              value="ID100"
          />

          <CardContent
              title="Ordered Date"
              value="21/12/2012"
          />

          <CardContent
              title="Title"
              value="Construction Work"
          />

          <CardContent
              title="Description"
              value="This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. "
          />

          <CardContent
              title="Address"
              value="This is a sample Address"
          />


          
          <View style={{height:20}}></View>
          
           

        </View>

        <View style={{height:20}}></View>
        
        </ScrollView>
        
      </View>

    );
  }

  const styles = StyleSheet.create({
  shadow: {  
   
    marginTop:20, 
    padding:5,
    
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOpacity: 1,
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:10,
    width:"100%",
    borderRadius: 2,
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
  headerContainer:{
    height:60,
    width:'100%',
    backgroundColor:'#3f4d67',
    alignItems:'center',
    justifyContent:"space-between",
    flexDirection:'row'
  },
  headerContent:{
    color:'white',
    fontSize:15,
    padding:15,
    paddingBottom:0
  },
  headerIcon:{
    left:20,
    paddingTop:18
  }
})