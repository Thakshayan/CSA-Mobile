import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, Text,StyleSheet,TouchableOpacity, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../components/loading';

import { GET_PROFILE } from '../GraphQL/Queries';

const ProfileScreen = () => {

  const {error,loading,data} = useQuery(GET_PROFILE);
  const [content,setContent] = useState();

  useEffect(()=>{
    if(data){
      setContent(data.worker_me)
    }
  },[data])

  // const myCustomShare = async() => {
  //   const shareOptions = {
  //     message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
  //     url: files.appLogo,
  //     // urls: [files.image1, files.image2]
  //   }

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     console.log(JSON.stringify(ShareResponse));
  //   } catch(error) {
  //     console.log('Error => ', error);
  //   }
  // };

  return (
      <ScrollView>
    <SafeAreaView >
      <View style={{width:'100%',height:40,backgroundColor:'#3f4d67'}}></View>

      {content ?
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
            <Text style={[styles.Text,{ color:'white',alignContent:'center',justifyContent:'center',paddingLeft:10}]}>-- {content.username}</Text>
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
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Text>{content.rating}</Text>
            <Text>Rating</Text>
          </View>
          <View style={styles.infoBox}>
            <Text>{content.no_of_vote}</Text>
            <Text>Votes</Text>
          </View>
      </View>

      {/* <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* //<Icon name="heart-outline" color="#FF6347" size={25}/> */}
            {/* <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}> */}
            {/* //<Icon name="credit-card" color="#FF6347" size={25}/> */}
            {/* <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={myCustomShare}>
          <View style={styles.menuItem}>
            {/* //<Icon name="share-outline" color="#FF6347" size={25}/> */}
            {/* <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}> */}
            {/* //<Icon name="account-check-outline" color="#FF6347" size={25}/> */}
            {/* <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>  */}
            {/* //<Icon name="settings-outline" color="#FF6347" size={25}/> */}
            {/* <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View> */} 
      </View>:
      <Loading/>
      }
    </SafeAreaView>
    </ScrollView>
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
