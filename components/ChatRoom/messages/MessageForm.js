import React, { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//style
import {  Icon, Input } from "native-base";
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import {
  AntDesign, Ionicons
} from "@expo/vector-icons";

//action
import { addMessage } from "../../../store/actions/messageActions";
import { flex, marginTop } from "styled-system";

const MessageForm = () => {
  const navigation = useNavigation();


  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    text: "",
  });

  const resetForm = () => {
    setMessage({ text: "" });
  };

  const handleSubmit = (event) => {
    dispatch(addMessage(message));
    resetForm();
  };

  return (    
    <View style={{
      // flexDirection: 'row',
      }}> 
    <View style={{flexDirection:"column-reverse"}}>
    <Icon
as={AntDesign}
          name='camera'
          size={30}
          color='#887700'
marginLeft="370"
onPress={()=>navigation.navigate("ImagePick")}
  />
 <Icon
           as={Ionicons}
           name='send-sharp'
           size={30}
           color='#887700'
           marginLeft="370"
           onPress= {handleSubmit()}
          />
</View> 
      <View>
        <Input
          size="sm"
          placeholder="enter text"
          onChangeText={(text) => setMessage({ ...message, text })} //this is the sort version of this code onChangeText={(value) => setUser({ ...user, username: value })} but we put username as an argument to shorten the code because if there is two username it will get shorten from this onChangeText={(username) => setUser({ ...user, username: username })} to the method above
          color="black"
          autoCapitalize="none"
          width="87%"
         paddingBottom="5"
        />
        
            {/* <EmojiSelector
  category={Categories.symbols}
  onEmojiSelected={emoji => console.log(emoji)}/>; */}
  
      </View>

     


   </View>
  );
};
export default MessageForm;