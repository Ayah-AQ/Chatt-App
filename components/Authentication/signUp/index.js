import React, { useState } from "react";
import { useDispatch } from "react-redux";
//Style
import BG from "../../../LQ1QwfcR.jpg"
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
  BkG,
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
    <BkG
    source={BG}
    alt="img"
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
    </BkG>
  );
};

export default Signup;