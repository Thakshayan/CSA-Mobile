import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import MainStackScreen from "./dashboard";
import ModalScreen from "../screens/modal";
import DrawerStackScreen from "./drawer";

const RootStack = createStackNavigator();

export default function RootStackScreen() {
    return (
      <RootStack.Navigator
        mode="modal"
        screenOptions={{
            headerShown: false,
          headerStyle: {
            backgroundColor: "#3f4d67",
          },
        }}
      >
        <RootStack.Screen 
          name="Home" 
          component={DrawerStackScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#3f4d67",
            },
          }}
           />
        <RootStack.Screen
          name="MyModal"
          component={RootStackScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#3f4d67",
            },
          }}
        />
      </RootStack.Navigator>
    );
  }