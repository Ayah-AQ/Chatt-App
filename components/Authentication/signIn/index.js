import React, { useState } from "react";
import { useDispatch } from "react-redux";
//Style
import { ImageBackground } from "react-native";
import BG from "../../../LQ1QwfcR.jpg"
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "../../../styles";
//Component
import { signIn } from "../../../store/actions/authActions";


const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
   const dispatch = useDispatch()
  const handleSubmit = async () => {
    await dispatch(signIn(user, navigation));

   };

  return (
    // Ask Laila
    <ImageBackground
    style={{
      width: "100%",
      height: "100%",
    }}
    source={BG}
  >
    <AuthContainer>
      <AuthTitle>Sign In</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
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
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("signUp")}>
        Don't have an account? Sign up.
      </AuthOther>
    </AuthContainer>
    </ImageBackground>
  );
};

export default Signin;