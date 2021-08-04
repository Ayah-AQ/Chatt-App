import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Text ,View, Image} from "react-native";
import { List} from "native-base";
import BG from "../../../LQ1QwfcR.jpg";
import {BkG} from "../../../styles";

//components
import ChatItem from "./ChatItem";
import SearchBar from "../SearchBar";
import ChatPrivate from "./ChatPrivate";

const ChatListComponent = ({ route, navigation }) => {
  const [query, setQuery] = useState("");
  const chats = useSelector((state) => state.chatReducer.chats);
  const _user = useSelector((state) => state.authReducer.user);
  if(!chats|| !_user)return(<></>)
  const chatList = chats
    .filter(
      (chat) =>
        chat.name.toLowerCase().includes(query.toLowerCase()) &&
        chat.users.find((user) => user.id === _user.id) &&
        chat.users.length !== 2
    )
    .map((chat) => <ChatItem navigation={navigation} chat={chat} key={chat.id} />);

   console.log(navigation);
    // console.log(chat);
    // const ChatMessage= chat.users.map(user=>user.find((_usr)=>user.id===_user.id))

  return (
   
    <>
      {/* <SearchBar setQuery={setQuery} /> */}
     <List>{chatList}</List>
      <ChatPrivate />
    </>
  );
};
export default ChatListComponent;
