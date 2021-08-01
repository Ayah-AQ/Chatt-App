import React from "react";

import {View } from "native-base";
import BG from "../../LQ1QwfcR.jpg"
import { BkG,SignupButton, SignInButton} from '../../styles';
const Home = ({ navigation }) => {

    return (
       <BkG source={BG} alt="Img"> 

       <View style={{marginTop:700}}>
       <SignInButton title="Already have account" onPress={()=>navigation.navigate("signIn")}
       ></SignInButton>

       <SignupButton title="Not a member yet" 
       onPress={()=>navigation.navigate("signUp")}
       ></SignupButton>
       </View>

       </BkG>
)}

export default Home;