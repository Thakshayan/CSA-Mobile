import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import Ionicons from "@expo/vector-icons/Ionicons";

import DashboardScreen from "./dashboard";
import NotificationsScreen from "../screens/notification";
import profileScreen from "../screens/profile";

import CustomButton from "../components/customButton";
// import DrawerStackScreen from "./drawer";

import { DrawerActions } from '@react-navigation/native';


const Tabs = createBottomTabNavigator();

export default function TabNavigation() {
    return (
      <Tabs.Navigator
        screenOptions={({ route,navigation }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name == "Notifications") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }else if (route.name == "Profile") {
              iconName = focused ? "ios-person" : "md-person";
            } else if (route.name == "Home"){
              //   navigation.dispatch(DrawerActions.openDrawer())
              //   iconName = "home"
              return <CustomButton navigation={navigation} />;
              }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
     
        
        <Tabs.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarBadge: 3,
          }}
        />

         <Tabs.Screen name="Home" component={NotificationsScreen} 
          options={{
              tabBarLabel: () => null
          }}
        />
         
        
          
        <Tabs.Screen name="Profile" component={profileScreen} />
      </Tabs.Navigator>
    );
  }