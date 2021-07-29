import React from "react";
import { useSelector } from "react-redux";
//Style
import { List } from "native-base";
//Component
import DetailsMessage from "./DetailsMessage";

const MessageList = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const messageList = messages.map((message) => (
    <DetailsMessage message={message} key={message.id} />
  ));
  return <List>{messageList}</List>;
};
export default MessageList;
