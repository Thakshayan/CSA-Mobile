import { Text, View, Button, TextInput,Modal, TouchableOpacity,StyleSheet } from "react-native";

import React from "react";
import {useState} from "react";

export default function SignInScreen({ navigation }) {

    const [signIn,setBoolean]  = useState(true)
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
                />

                

            </View>
            <View style={styles.input}>
                 
                <TextInput 
                    style={{paddingHorizontal:10}}
                    placeholder="password"
                />

                

            </View>

            <TouchableOpacity 
              onPress={()=>{
                navigation.navigate("SecondItem");
              }}
              
              style={styles.signInButton}
              >
                <Text style={{
                    color:"white",
                    // fontFamily:"SemiBold"
                }}>Sign In</Text>

            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>{
              navigation.navigate("SecondItem");
            }}
            
            style={{
                alignSelf:"center",
                color:"#3f4d67",
                // ////
                paddingVertical:30
            }}>
            <Text 
            
            >New User</Text>
            </TouchableOpacity> */}
            {/* <Button
              title="Sign In"
              style={{
                alignSelf:"center",
                color:"#3f4d67",
                // ////
                paddingVertical:30
            }}
             
              onPress={() => {
                
                navigation.navigate("SignInScreen");
                // navigation.openDrawer();
              }}
            /> */}
        </View>
         
        
      </View>

    //   </Modal>
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
        alignItems:"center",
        marginHorizontal:55,
        borderWidth:2,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#3f4d67",
        borderRadius:23,
        paddingVertical:2
    
    },
    signInButton:{
      marginHorizontal:55,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
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