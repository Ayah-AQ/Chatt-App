import React,{useEffect,useRef} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//Style
import { BkG, RedBox, RoomBorder,ChatName, ChatImage,AuthOther } from "../../styles";
import Profile from "../../Picture1.png";
import BG from "../../LQ1QwfcR.jpg";
import {  Icon } from "native-base";
import { Button, Text ,View, Image} from "react-native";

import {
  FontAwesome
} from "@expo/vector-icons";
//component
import MessageForm from "./messages/MessageForm";
import MessageList from "./messages/MessageList";
import { ScrollView } from "react-native-gesture-handler";
import {signout,fetchProfiles} from "../../store/actions/authActions"

function Room({navigation,route}) {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageReducer.messages);
  const {chat}=route.params
 const el = useRef()
  useEffect(() => {
    el.current.scrollToEnd()
  })
 
  const users = useSelector((state) => state.authReducer.user);
  console.log("room",users);
      useEffect(() => {
    dispatch(fetchProfiles(users.id));
  }, []);
  
  console.log("Routes",chat);
  const chatMessage= chat.messages.map(m=>m.find((messages)=>m.id===messages.id))
  console.log("aya",chatMessage);
  return (
    <BkG source={BG} alt="Img">
    
    <RoomBorder >
      <RedBox
       >
        <ChatName>{chat.username} </ChatName>
        <ChatImage
        alt="Img"
          source={{uri:chat.image}}
          // style={{borderRadius:"50%"}}
        />
      </RedBox>
      
      <ScrollView  ref={el}>
        <MessageList messages={chatMessage} navigation={navigation} />
      </ScrollView>
      <MessageForm />
      </RoomBorder>
      <Button title="Setting" onPress={() => navigation.navigate("ProfileSettings")} style={{position:"absolute",top:"90%"}}></Button >
    </BkG>
  );
}

export default Room;
