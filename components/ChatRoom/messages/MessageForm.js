import React, { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//style
import {  Icon, Input } from "native-base";
import {View, Platform } from 'react-native';
import {
  AntDesign, Ionicons
} from "@expo/vector-icons";

//action
import { addMessage } from "../../../store/actions/messageActions";
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
    <View 
      style={{ flex: 0, flexDirection: 'row',marginBottom:10}}
      > 
    <View 
    style={{  flex: 1,  flexDirection: "column-reverse"
      }}
    >
    <Icon
as={AntDesign}
          name='camera'
          size={30}
          color='#887700'
marginLeft="370"
onPress={()=>navigation.navigate("ImagePick")}
zIndex="1"
  />
 <Icon
           as={Ionicons}
           name='send-sharp'
           size={30}
           color='#887700'
           marginLeft="370"
           onPress={handleSubmit}
           zIndex="1"
          />

</View> 
      <View 
      style={{  flex: 1, 
    flexDirection: "row-reverse",
    }}
    >
        <Input
          size="sm"
          placeholder="enter text"
          onChangeText={(text) => setMessage({ ...message, text })} 
                   color="black"
          autoCapitalize="none"
          width="200%"
        
        />
    
  
      </View>

     


   </View>
  );
};
export default MessageForm;