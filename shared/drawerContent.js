import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
  Image,
  ScrollView
} from 'react-native';

import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CustomDrawerContent(props){

    const width = useWindowDimensions().width * 0.3;
    const height = useWindowDimensions().height;
    const signOut = ()=>{
        alert(height)
    }

    return(
        <DrawerContentScrollView {...props} style={{backgroundColor:'#3f4d67',height:height}}>
            
      <View style={{backgroundColor:'#3f4d67'}} >
        <View>
          <>
            <View >
                <View style={{padding:10,flexDirection:'row'}}>
               
                <Image source={require("../assets/images/profile.jpg")} style={styles.image} />
                  <View style={{justifyContent:'center',alignItems:'center',marginLeft:2,flexDirection:'row'}}>
                      {/* <View style={{borderWidth:2,borderLeftWidth:0,borderColor:'white',height:60,borderTopRightRadius:40,borderBottomRightRadius:40,width:30}}></View> */}
                      <Text style={styles.name}>Thanabalasingam Thakshayan</Text>
                  </View>
                </View>
                <View style={{marginLeft:20}}>
                  <Text style={{color:'white'}}>Home </Text>
                </View>
              <DrawerItem
                label={()=>{
                  return (
                    <View style={{flexDirection:'row'}}>
                      <FontAwesome name="home" size={24} color="white" style={{marginLeft:10,width:50}}/>
                      
                      <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white'}}> Dashboard </Text>
                      </View>
                    </View>
                  )
                }}
                labelStyle={{ color: 'white' }}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
            </View>
          </>
          {/* <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Finish Work"
            labelStyle={{ color: 'w' }}
            onPress={() => {
              props.navigation.navigate('On Going Work');
            }}
          /> */}
        </View>
        <View>
          <View>
          
          </View>

          
        </View>
        <View>
          <View style={{marginLeft:20}}>
            <Text style={{color:'white'}}>Work </Text>
          </View>

          <DrawerItem
           
           label={()=>{
            return (
              <View style={{flexDirection:'row'}}>
                <MaterialIcons name="call-to-action" size={24} color="white" style={{marginLeft:10,width:50}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'white'}}> On Going Work </Text>
                </View>
              </View>
            )
          }}
            labelStyle={{ color: 'white' }}
            onPress={() => {
              props.navigation.navigate('WorkTabNavigation',{screen:'On Going Work'});
            }}
          />

          <DrawerItem
           
           label={()=>{
            return (
              <View style={{flexDirection:'row'}}>
                <MaterialIcons name="local-activity" size={24} color="white" style={{marginLeft:10,width:50}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'white'}}> Finished Work </Text>
                </View>
              </View>
            )
          }}
           labelStyle={{ color: 'white' }}
           onPress={() => {
             props.navigation.navigate('WorkTabNavigation',{screen:'Finish Work'});
           }}
         />

        </View>

        <View >

          <View style={{marginLeft:20}}>
            <Text style={{color:'white'}}>Profile</Text>
          </View>


          <DrawerItem
           
            label={()=>{
              return (
                <View style={{flexDirection:'row'}}>
                  <Fontisto name="person" size={20} color="white" style={{marginLeft:10,width:50}}/>
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}> Profile </Text>
                  </View>
                </View>
              )
            }}
            labelStyle={{ color: 'white' }}
            onPress={() => {
              props.navigation.navigate('TabNavigation', { screen: 'Profile' });
            }}
          />

          <DrawerItem
           
           label={()=>{
            return (
              <View style={{flexDirection:'row'}}>
                {/* <Ionicons name="md-notifications" size={24} color="white" style={{marginLeft:10,width:50}}/> */}
                <MaterialIcons name="notifications-active" size={24} color="white" style={{marginLeft:10,width:50}}/>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'white'}}> Notifications </Text>
                </View>
              </View>
            )
          }}
           labelStyle={{ color: 'white' }}
           onPress={() => {
             props.navigation.navigate('TabNavigation', { screen: 'Notifications' });
           }}
          />

        </View>
        {/* <View>
          <View>
          </View>

          <DrawerItem
           
            label="Work"
            labelStyle={{ color: 'white' }}
            onPress={() => {
              props.navigation.navigate('Work');
            }}
          />
        </View> */}
      </View>
    
      <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center',backgroundColor:'#ff5d6510' ,borderRadius: 20,padding:10}} >
          <TouchableOpacity onPress={signOut}  >
             
              <Text style={{color:'white'}}>
                Sign Out
                </Text>
          </TouchableOpacity>
         
      </View>
      
    </DrawerContentScrollView>

    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    menuItemsCard: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    circleContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      padding: 10,
    },
    image:{
        width:80,
        height:80,
        borderRadius:40,
        margin:10,
        marginRight:0,
        borderWidth:2,
        borderColor:'white'
  
    },
    name:{
      color:'white',
      borderLeftWidth:0,
      borderWidth:2,
      borderColor:'white',
      padding:10,
      width:155,
      borderBottomRightRadius:50,
      borderTopRightRadius:50,
      left:-8,
      // paddingLeft:20
    },
    
  });