import React from "react";

import { useSelector } from "react-redux";

import { List } from "native-base";

import DetailsMessage from "./DetailsMessage";

const MessageList = () => {
  const messages = useSelector((state) => state.messages.messages);
  console.log(messages);
  const messageList = messages.map((message) => (
    <DetailsMessage message={message} key={message.id} />
  ));
  return <List>{messageList}</List>;
};
export default MessageList;
