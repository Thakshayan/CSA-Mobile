import React from 'react';
import {View, SafeAreaView, Text,StyleSheet,TouchableOpacity, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const ProfileScreen = () => {

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

  return (
      <ScrollView>
    <SafeAreaView >
      <View style={{width:'100%',height:40,backgroundColor:'#3f4d67'}}></View>
    <View style={[styles.container]}>

      <View style={[styles.userInfoSection,{backgroundColor:"#3f4d67",padding:10,borderRadius:5}]}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
        <Image source={require("../assets/images/profile.jpg")} style={styles.image} />
          <View style={{marginLeft: 20,backgroundColor:"#3f4d67",padding:20,}}>
            <Text style={[styles.Text, {
              marginTop:15,
              marginBottom: 5,
              color:'white'
              
            }]}>John Doe</Text>
            <Text style={[styles.Text,{ color:'white'}]}>@j_doe</Text>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
         <Icon name="map-marker-radius" color="#777777" size={20}/> 
          <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
      <Icon name="phone" color="#777777" size={20}/> 
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
     <Icon name="email" color="#777777" size={20}/> 
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Text>4.7</Text>
            <Text>Rating</Text>
          </View>
          <View style={styles.infoBox}>
            <Text>07</Text>
            <Text>Works</Text>
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
      </View>
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
