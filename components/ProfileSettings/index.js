import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import {Container, Icon, Image, Input, ScrollView, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../Picture1.png"
// import { AuthContainer, AuthTextInput, AuthTitle, BioInput, ProfileSettingInput,  SettingBKG,  Username } from "../../styles";

export const ProfileSettings = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const [bio, setBio] = useState({
        bio: "",
      });
    const user = useSelector((state) => state.authReducer.user);
    const message = useSelector((state) => state.messageReducer.messages);
    console.log(user);
    return(
      
<SettingBKG>
    {/* <Image source={user.image} style={{width:200,height:200,marginLeft:100,marginTop:50,marginBottom:-100}}></Image> */}
    <Icon
            name="account-edit"
            as={MaterialCommunityIcons}
            placeholder="change profile picture"
            color="white"
            style={{ color: "black" }}
            onPress={() => dispatch(signout()),()=>navigation.navigate("Home")}
            zIndex="1"
          marginTop="70px"
          marginLeft="77px"
        />

      <AuthContainer>
     <Text>{user && <Username>{` ${user.username} `}</Username>}</Text>
     <BioInput
      onChangeText={(text) => setBio({ ...bio, text })} placeholder="Bio"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <ProfileSettingInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Old password"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      /> 
       <ProfileSettingInput
        onChangeText={(password) => setUser({ ...user, password})}
        placeholder="New password"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      /> 
     {user && (
          <Icon
            name="sign-out"
            as={FontAwesome}
            placeholder="Signout"
            color="white"
            style={{ color: "black" }}
            onPress={() => dispatch(signout()),()=>navigation.navigate("Home")}
            zIndex="1"
          marginTop="70"
        />
        )}
    </AuthContainer>
</SettingBKG>)
};
