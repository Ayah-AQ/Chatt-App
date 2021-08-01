import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Component
import Home from "../Home";
import Room from "../ChatRoom/Room";
import ImagePick from "../ChatRoom/messages/ImagePick";

import MessageList from "../ChatRoom/messages/MessageList";
import Signup from "../Authentication/SignUp";
import Signin from "../../components/Authentication/signIn/Signin"

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return(
    
      <Navigator   
      initialRouteName="Home"
      screenOptions={{
      // headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#C9D8B6",
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
      }}> 
   
         <Screen name="Home" component={Home} options={{ headerShown: false }} />
         <Screen
        name="Room"
        component={Room}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ImagePick"
        component={ImagePick}
        options={{
          headerShown: false,
        }}
      />
       <Screen
        name="MessageList"
        component={MessageList}
        options={{
          headerShown: false,
        }}
      />
   <Screen
        name="signIn"
        component={Signin}
        options={{
          title: "Sign In",
          headerShown: false,
        }}
      />

      <Screen
        name="signUp"
        component={Signup}
        options={{
          title: "Sign Up",
          headerShown: false,
        }}
      />
     
    </Navigator>
  )};

export default RootNavigator;
