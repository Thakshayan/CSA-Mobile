import React from "react";
import {Text,View,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";


export default function Chart({value}){
    const data=[ 
        {value:value[1],color:'#f4c22b',text:value[1],textColor:'black'}, 
        {value:value[2],color:'#c04000',text:value[2],textColor:'black'}, 
        {value:value[0],color:'#1de9b6',text:value[0],textColor:'black'}]
    return(
        

        <View style={{padding:5}}>
        <ScrollView>
        <PieChart 
                data = {data} 
                showText={true}
                innerRadius={50}
                donut/>
        
        <View >
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <View style={{height:10,width:10,borderRadius:5,backgroundColor:'#f4c22b',marginRight:10}}></View>
                <Text>On going Works</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <View style={{height:10,width:10,borderRadius:5,backgroundColor:'#c04000',marginRight:10}}></View>
                <Text>New Works</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <View style={{height:10,width:10,borderRadius:5,backgroundColor:'#1de9b6',marginRight:10}}></View>
                <Text>Finished Works</Text>
            </View>
        </View>
        {/* <View style={[styles.shadow,styles.elevation]}>
            <Text style={styles.heading}>Work stage : closed</Text>
                
            <TouchableOpacity  style={styles.button}> 
              <Text style={{color:"white"}}> View </Text>
            </TouchableOpacity>
        </View> */}
        </ScrollView>
        
      </View>
//   width={screenWidth}
//   height={220}
// //   chartConfig={chartConfig}
//   accessor={"population"}
//   backgroundColor={"transparent"}
//   paddingLeft={"15"}
//   center={[10, 50]}
//   absolute

    )
}

const styles = StyleSheet.create({
    shadow: {  
    
      
      overflow: 'hidden',
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 1,
      paddingLeft:20,
      paddingTop:10,
      paddingBottom:10,
      width:"100%",
      borderRadius: 10,
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
      marginBottom:10,
      fontSize:18
    },
    button:{
      marginHorizontal:55,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      backgroundColor:"#3f4d67",
      paddingVertical:10,
      borderRadius:23,
      color:"white"
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 1,
      shadowRadius: 3,
    },
});

