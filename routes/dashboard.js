import React from "react";
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Button, TextInput } from "react-native";

import {MaterialIcons} from '@expo/vector-icons';

import Header from "../shared/header";

import HomeScreen from "../screens/home";
import WorkScreen from "../screens/work";



const Dashboard = createStackNavigator();


export default function DashboardScreen() {
  return (
    <Dashboard.Navigator>
      <Dashboard.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation,route})=>({
          title :"Home",
          headerTitle : (props) =>(
            <Header navigation={navigation}/>
          ),
          headerStyle:{
            backgroundColor:"#3f4d67"
          },
          headerLeft: () => {
            return null
          },
      })}
      />
      {/* <Dashboard.Screen
        name="WorkScreen"
        component={WorkScreen}
        options={{
          title: "Detail Screen",
          headerRight: () => (
            <Button title={"Done"} onPress={() => alert("Am pressed!")} />
          ),
          headerBackTitle: "Back",
        }}
      /> */}
    </Dashboard.Navigator>
  );
}