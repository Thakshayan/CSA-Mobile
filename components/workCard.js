// import ImagedCardView from "react-native-imaged-card-view";
import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image, ScrollView, TextInput} from 'react-native';
import Card from './card';


export default function WorkCard({id,title,description,navigation}){
    return(
      <ScrollView>
        <View style={[styles.shadow,styles.elevation]}>
          
        <View >
            
            <View style={[{backgroundColor:'#3f4d67',flexDirection:'row',height:50,elevation:1}]}>
              <Image source={require("../assets/images/work-2.png")} style={styles.image}/>
            <View style={styles.heading}>
              <Text style={{color:'white',width:170,overflow:'scroll',padding:10}} >Work ID : {id}</Text>
            </View>
            </View>
            <View>
              <View style={{borderWidth:1,borderColor:'#3f4d67',padding:5}} >
                  <View style={{flexDirection:'row'}}>
                    <View style={styles.title}></View>
                    <View >
                      <Text>
                        {title}
                      </Text>
                    </View>
                  </View>
                   
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text> {description}</Text>
                  </View>
                  <TouchableOpacity  style={styles.button} onPress={()=>{
                    navigation.navigate('Work',{workId:id})
                  }}> 
                    <Text style={{color:"white"}}> View </Text>
                  </TouchableOpacity>
              </View>
            </View>
        </View>
        
      </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    shadow: {  
    
      overflow: 'hidden',
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 1,
      paddingLeft:10,
      paddingTop:10,
      paddingBottom:10,
      width:"100%",
      borderRadius: 10,
      // backgroundColor:'#E0FFFF',
      paddingRight:10,
      marginBottom:10
    },
    elevation: {
       elevation: 1,
      shadowColor: '#52006A',
      // borderWidth:1,
      // borderColor: '#e9eaec'
    },
    heading:{
      opacity:0.6,
      marginBottom:10,
      fontSize:18
    },
    button:{
      marginHorizontal:55,
      alignItems:"center",
      justifyContent:"center",
      marginTop:10,
      backgroundColor:"#3f4d67",
      paddingVertical:5,
      borderRadius:15,
      color:"white"
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    image:{
      width:90,
      height:90,
      margin:4,
     
      borderRadius:50,
      
      backgroundColor:'white',
      borderWidth: 2,
      marginLeft:1,
      borderWidth:2,
      borderColor:'#e9eaec',
      marginLeft:5
  
    },
    title:{
      width:100,
      height:50,
      marginLeft:10,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50
    },
    heading:{
      alignItems:'center',
      justifyContent:'center',
      paddingLeft:10,
      overflow:'scroll'
    }
});