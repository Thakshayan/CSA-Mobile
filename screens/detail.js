import { Text, View, Button, TextInput } from "react-native";
import React from "react";


export default function DetailScreen({ route, navigation }) {
    
    return (
      <View>
        <Text style={{ fontSize: 24 }}>Welcome </Text>
        {/* <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        />
        <Button
          title="Open PopUp"
          onPress={() => {
            navigation.navigate("MyModal");
          }}
        /> */}
      </View>
    );
  }