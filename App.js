import { ImageBackground, StyleSheet} from 'react-native';
  
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import  RootNavigator  from "./components/Navigation/index";
import { NativeBaseProvider } from 'native-base';
import Room from './components/ChatRoom/Room';
import BG from "./LQ1QwfcR.jpg"


export default function App() {

  return (
    <ImageBackground  style={{width:"100%", height:"100%"}} source= {BG} 
  >

    <Provider store={store}>
      <NativeBaseProvider >
        <Room/>
     {/* <NavigationContainer>
        <RootNavigator />
      </NavigationContainer> */}
    </NativeBaseProvider>
  </Provider>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
