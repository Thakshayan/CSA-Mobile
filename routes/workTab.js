import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import { MaterialIcons } from '@expo/vector-icons';

import OnGoingWork from "../screens/onGoingWork";
import FinishedWork from "../screens/finishedWork";

// import DrawerStackScreen from "./drawer";

import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import CustomButton from "../components/button";


const Tabs = createBottomTabNavigator();

export default function WorkTabNavigation() {
    return (
      <Tabs.Navigator 
        screenOptions={({ route,navigation }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name == "On Going Work") {
              iconName = focused ? "call-to-action" : "call-to-action";
            }else if (route.name == "Finish Work") {
              iconName = focused ? "local-activity" : "local-activity";
            } else if (route.name == "Home"){
               
               return <CustomButton navigation={navigation} />;
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },

        })}
      >
     

   
        <Tabs.Screen name="On Going Work"
          component={OnGoingWork}
          options={{
            tabBarBadge: 3,
          }}
        />

          <Tabs.Screen name="Home" component={OnGoingWork} 
          options={{
              tabBarLabel: () => null
          }}
        />
        
          
        <Tabs.Screen name="Finish Work" component={FinishedWork} />

      </Tabs.Navigator>
    );
  }