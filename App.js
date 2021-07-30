import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { ImageBackground, StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import Room from "./components/ChatRoom/Room";
import  RootNavigator  from "./components/Navigation/index";



export default function App() {
  return (
  
      <Provider store={store}>
        <NativeBaseProvider>
        <NavigationContainer>
          
        <RootNavigator />
     
        
         </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
