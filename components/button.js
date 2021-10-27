import { Text, View, Button, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function CustomButton({navigation}) {
    return (

      <TouchableOpacity 
      
        onPress={()=>{
            navigation.dispatch(DrawerActions.openDrawer())
        }}

        style={{borderWidth:6,borderRadius:20,padding:2,borderColor:'#3f4d67'}}
      >
        <FontAwesome name="home" size={24} color="#3f4d67" />
      </TouchableOpacity>

    );
  }