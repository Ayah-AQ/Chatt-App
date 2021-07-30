import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Component
import  Signin from "../Authentication/signIn";
import Signup  from "../Authentication/signUp";
import Home from "../Home";
import Room from "../ChatRoom/Room";
import MessageList from "../ChatRoom/messages/MessageList";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return(
      <Navigator   
      initialRouteName="Room"> 
   
         <Screen name="Home" component={Home} options={{ headerShown: false }} />
         <Screen
        name="Room"
        component={Room}
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
