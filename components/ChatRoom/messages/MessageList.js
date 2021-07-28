import React from "react";

import { List, View } from "native-base";
import DetailsMessage from "./DetailsMessage";
import { useSelector } from "react-redux";

const MessageList = () => {
  const messages = useSelector(state => state.messages.messages)
  console.log(messages);
  const messageList = messages.map((message) => (
    <DetailsMessage message={message} key={message.id} />
  ));
  return <List>{messageList}</List>;
};
export default MessageList;
