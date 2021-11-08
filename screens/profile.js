import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, Text,StyleSheet,TouchableOpacity, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';
import Loading from '../components/loading';
import Rating from '../components/rating';

import { GET_PROFILE } from '../GraphQL/Queries';

const ProfileScreen = () => {

  const {error,loading,data} = useQuery(GET_PROFILE);
  const [content,setContent] = useState();

  useEffect(()=>{
    if(data){
      setContent(data.worker_me)
    }
  },[data])

  

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ScrollView>
      {content ?
      <SafeAreaView >
        <View style={{width:'100%',height:40,backgroundColor:'#3f4d67'}}></View>

       
      <View style={[styles.container]}>

        <View style={[styles.userInfoSection,{backgroundColor:"#3f4d67",padding:10,borderRadius:5}]}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
          <Image source={require("../assets/images/profile.jpg")} style={styles.image} />
            <View style={{marginLeft: 20,backgroundColor:"#3f4d67",paddingTop:20,}}>
              <Text style={[styles.Text, {
                marginTop:15,
                marginBottom: 5,
                color:'white'
                
              }]}> {content.name}</Text>
              <Text style={[styles.Text,{ color:'white',textAlign:'center',justifyContent:'center',paddingLeft:10}]}>-- {content.username}</Text>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20}/> 
            <Text style={{color:"#777777", marginLeft: 20}}>{content.address}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20}/> 
            <Text style={{color:"#777777", marginLeft: 20}}>{content.contact_no}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20}/> 
            <Text style={{color:"#777777", marginLeft: 20}}>{content.email}</Text>
          </View>
          <View style={styles.row}>
            <Entypo name="v-card" size={20} color="#777777" />
            <Text style={{color:"#777777", marginLeft: 20}}>{content.nic}</Text>
          </View>
        </View>

        <View style={[styles.infoBoxWrapper,{backgroundColor:'#3f4d67'}]}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
              
            }]}>
              <Text style={{color:'white'}}>
                {content.rating}
              </Text>
              <Text style={{color:'white'}}>
                Rating
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={{color:'white'}}>
                {content.no_of_vote}
              </Text>
              <Text style={{color:'white'}}>
                Votes
              </Text>
            </View>
        </View>

        

        
        </View>
      </SafeAreaView>
      :
      <Loading/>
      }
    </ScrollView>
    {
    content ?
      <View style={{width:'100%',alignItems:'center',justifyContent:'center',padding:30,backgroundColor:'#3f4d67'}}>
        <Rating
          rating={content.rating}
        />
      </View>
    :
      null
    }
  </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    
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
    marginBottom:10,

  },
  elevation: {
    elevation: 3,
    shadowColor: '#52006A',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  image:{
      width:100,
      height:100,
      borderRadius:50

  }
});
