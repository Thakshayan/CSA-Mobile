import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


import DashboardScreen from "./dashboard";


import CustomDrawerContent from "../shared/drawerContent";

import OnGoingWork from "../screens/onGoingWork";
import FinishedWork from "../screens/finishedWork";
import TabNavigation from "./tab";
import SignInScreen from "../screens/first";
import WorkScreen from "../screens/work";
import WorkTabNavigation from "./workTab";

const Drawer = createDrawerNavigator();



export default function DrawerStackScreen(){
    return(
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>

         <Drawer.Screen name="Home" component={DashboardScreen} />

         <Drawer.Screen name="WorkTabNavigation" component={WorkTabNavigation} />

         <Drawer.Screen name="On Going Work" component={OnGoingWork} />
        
         <Drawer.Screen name="Finish Work" component={FinishedWork} />

         <Drawer.Screen name="Work" component={WorkScreen} />

         <Drawer.Screen name="SignOut" component={SignInScreen} />

         


         <Drawer.Screen name="TabNavigation" component={TabNavigation} />
        
        
    </Drawer.Navigator>
    )
}