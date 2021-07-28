import React from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//react
import { useState } from "react";
//Emoji
// import InputEmoji from "react-input-emoji";
import { Text, View,Image} from "react-native";
import {Button, Input} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "native-base";

//action
import { addMessage } from "../../../store/actions/messageActions";
const FormMessage = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
   image: "",
   text:""
  });

  // const [text, setText] = useState("");
const resetForm= ()=>{setMessage({text:""})}

  // function handleOnEnter(event) {
  //   console.log(text);
  //   event.preventDefault();
  //    resetForm()     
  //    dispatch(addMessage({text}));

  // }
    const handleSubmit = (event) => {
      event.preventDefault();
     dispatch(addMessage(message))
     resetForm()  
     console.log(message);
  }
  // const handleAttachment = (event) =>
  //   setMessage({ ...message, image: event.target.files[0] });

  return (
    <View>
    {/* <View className="container" style={{background: "linear-gradient(180deg, #F4DD06 50%, rgba(196, 196, 196, 0) 100%)",width:'140%'}}> */}
     {/* <InputEmoji
        name="text"
        className="Emoji"
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnterText={()=>handleOnEnter()}
        placeholder="Type a message"
      /> */}
    
    <View>
       
      <Input
          size="sm"
          placeholder="enter text"
         
          onChangeText={(text) => setMessage({ ...message, text })} //this is the sort version of this code onChangeText={(value) => setUser({ ...user, username: value })} but we put username as an argument to shorten the code because if there is two username it will get shorten from this onChangeText={(username) => setUser({ ...user, username: username })} to the method above
          color="black"
          autoCapitalize="none"
        />

      {/* <Input 
            name="image"
            type="file"
            onChange={handleAttachment}
           className="form-control" 
            />

          <Icon as={Ionicons}
        name="ios-attach-outline"
            
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              left: "125%",
              right: "0.9%",
              top: "10%",
            }}
          /> */}
        <Button  onPress={handleSubmit}>
          send
        {/* <Icon as={Ionicons}
        name="send-sharp"
     
          className="Send"
          style={{
            placement: "inline",
            position: "absolute",
            width: "28px",
            height: "28px",
            left: "129%",
            right: "0.9%",
            top: "17%",
          }}
        /> */}
        </Button>
    </View>    
    
      </View>
  );
};
export default FormMessage;
