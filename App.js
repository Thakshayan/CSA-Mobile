import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";


import SignInScreen from "./screens/signIn";
import DrawerStackScreen from "./routes/drawer";
// import TabNavigation from "./routes/tab";


// import { DrawerActions } from '@react-navigation/native';
// export const navigationRef = React.createRef();

// export function openDrawer(routeName, params) {
//   navigationRef.current.dispatch(DrawerActions.openDrawer());
// }

const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
      <Stack.Screen name="SignInScreen" component={SignInScreen} 
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#3f4d67",
            },
          }}
      />
      <Stack.Screen name="SecondItem" component={DrawerStackScreen} 
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#3f4d67",
            },
            
          }}
      />
     </Stack.Navigator>
    </NavigationContainer>
  );
}


// <Drawer.Navigator>
//         <Drawer.Screen name="SignInScreen" component={SignInScreen} />
//         <Drawer.Screen name="SecondItem" component={TabNavigation} />
//       </Drawer.Navigator>