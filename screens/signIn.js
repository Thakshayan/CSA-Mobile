import { Text, View, Button, TextInput,Modal, TouchableOpacity,StyleSheet, TouchableWithoutFeedback } from "react-native";

import React from "react";
import {useState} from "react";
import { useMutation } from "@apollo/client";
import {SIGNIN} from '../GraphQL/Mutation';
import * as SecureStore from 'expo-secure-store';

import { Entypo } from '@expo/vector-icons';

export default function SignInScreen({ navigation }) {

    const [signINWorker, { loading, error }] = useMutation(SIGNIN, {
        onCompleted: data => {
            // store the token with a key value of `token`
            // after the token is stored navigate to the app's main screen
              console.log(data.signINWorker)
              if(data.signINWorker && !error){
               SecureStore.setItemAsync('token', data.signINWorker).then(
                navigation.navigate('SecondItem')
               ).catch(error=>{
                 console.log(error)
               })
              }
        }
    });

    const [signIn,setBoolean]  = useState(true)
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [visbility,setVisibility] = useState(true)

    return (
    //   <Modal visible={signIn}>
      <View style={styles.container}>
        
        <View style={{backgroundColor:"#FFF",marginTop:30,marginBottom:20,height:"100%",justifyContent:"center",width:"100%",borderColor:"#3f4d67",borderWidth:2,borderRadius:5}}>
            {/* <Image source ={require('../images/image.jpg')}
                style={{width:"100%",height:"43%"}}
            /> */}
          
          <Text
            style={styles.description}
            >
              Sign in with your Employee IDs
          </Text>

            <Text
             style={styles.heading}
            >Sign In</Text>

            

            <View style={styles.input}>
                
                <TextInput 
                    style={{paddingHorizontal:10}}
                    placeholder="Worker Id"
                    onChangeText={text => setUsername(text)}
                    value={username}
                   
                    autoFocus={true}
                    autoCapitalize="none"
                />
            </View>

    

            <View >
            <View style={styles.input}>
                <TextInput 
                    style={{paddingHorizontal:10,paddingRight:35,width:200}}
                    placeholder="password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    autoCapitalize={"none"}
                    secureTextEntry={visbility}
                />
              </View>  
               
                 <TouchableOpacity onPress={()=>{
                  setVisibility(!visbility)
                  }}
                  style={{alignSelf:'flex-end',marginRight:50,top:-30}}
                >
                  {visbility ? 
                    <Entypo name="eye" size={24} color="#3f4d67" /> :
                    <Entypo name="eye-with-line" size={24} color="#3f4d67" />
                  }
                </TouchableOpacity>
                
                
            </View>
           
            {loading ?

            <TouchableOpacity style={styles.signInButton} disabled={true}>
              <Text style={{color:'white'}}> Loading ...</Text>
            </TouchableOpacity>

            :<TouchableOpacity 
              onPress={()=>{

                if(username && password){
                  console.log(username,password)
                  signINWorker({
                    variables:{
                      username: username,
                      password: password
                      
                    }
                  }).catch(error=>{
                  })
              }
                
              }}
              
              style={styles.signInButton}
              >
                <Text style={{
                    color:"white",
                    // fontFamily:"SemiBold"
                }}>Sign In</Text>

            </TouchableOpacity>}
            
        </View>
         
        
      </View>


    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
        paddingTop:10,
        paddingBottom:10,
        justifyContent: 'center',
      
    },
    heading:{
        fontSize:30,
        paddingTop:10,
        alignSelf:"center",
    
    },
    input:{

        flexDirection:"row",
        marginHorizontal:40,
        borderWidth:2,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#3f4d67",
        borderRadius:23,
        padding:3
       
    
    },
    signInButton:{
      marginHorizontal:55,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#3f4d67",
      paddingVertical:10,
      borderRadius:23
    },
    description:{
      
        ////
        marginHorizontal:5,
        textAlign:'center',
        marginTop:5,
        opacity:0.4
    
    }
  })