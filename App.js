import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";


import SignInScreen from "./screens/signIn";
import DrawerStackScreen from "./routes/drawer";


import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

import { setContext } from 'apollo-link-context';
import * as SecureStore from 'expo-secure-store';


import getEnvVars from './config';
const { API_URI } = getEnvVars();

// configure our API URI & cache
const uri = API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });
const authLink = setContext(async (_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: (await SecureStore.getItemAsync('token')) || ''
        }
    };
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
});

const Stack = createStackNavigator();




export default function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}


// <Drawer.Navigator>
//         <Drawer.Screen name="SignInScreen" component={SignInScreen} />
//         <Drawer.Screen name="SecondItem" component={TabNavigation} />
//       </Drawer.Navigator>