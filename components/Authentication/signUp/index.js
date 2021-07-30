import React, { useState } from "react";
import { useDispatch } from "react-redux";
//Style
import { ImageBackground } from "react-native";
import BG from "../../../BG.png"
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "../../../styles";
//Component
import { signUp } from "../../../store/actions/authActions";


const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await dispatch(signUp(user, navigation));
    alert("Done successfully")

  };

  return (
    <ImageBackground
    style={{
      width: "100%",
      height: "100%",
    }}
    source={BG}
  >
    <AuthContainer>
      <AuthTitle>Sign Up</AuthTitle>  
         <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Email"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
     
 
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("signIn")}>
        Already have an account? Sign in.
      </AuthOther>
    </AuthContainer>
    </ImageBackground>
  );
};

export default Signup;