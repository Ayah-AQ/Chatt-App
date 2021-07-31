import React from "react";
import { useSelector } from "react-redux";
//Style
import { List } from "native-base";
//Component
import MessageDetails from "./MessageDetails";

const MessageList = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const messageList = messages.map((message) => (
    <MessageDetails message={message} key={message.id} />
  ));
  return <List>{messageList }</List>;
};
export default MessageList;
