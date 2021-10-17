import { Text, View, Button, TextInput } from "react-native";
import React from "react";


export default function ModalScreen(route) {
    return (
      <View style={{ margin: 60 }}>
        <Text style={{ fontSize: 24 }}>Hey am a modal screen!</Text>
        <Button
          title="Close this modal"
          onPress={() => {
            route.navigation.goBack();
          }}
        />
      </View>
    );
  }