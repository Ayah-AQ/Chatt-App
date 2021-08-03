import React,{useEffect,useRef} from "react";
import { useSelector } from "react-redux";
//Style
import { List } from "native-base";
import { View } from 'react-native';

//Component
import MessageDetails from "./MessageDetails";

const MessageList = () => {

  const messages = useSelector((state) => state.messageReducer.messages);
  const users = useSelector((state) => state.authReducer.user);

 const messageList = messages.map((message) => (
    <MessageDetails
      user={users.find((u) => message.userId === u.id)}
      message={message}
      key={message.id}
    />))
  return( 
  <List>{messageList }</List>
)}
export default MessageList;
