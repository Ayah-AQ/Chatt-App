import React from "react";

import { useSelector } from "react-redux";

import "./Room.css";
import Profile from "../../Picture1.png";

import { View, Text, Image } from "native-base";

import FormMessage from "./messages/FormMessage";
import MessageList from "./messages/MessageList";

function Room() {
  const messages = useSelector((state) => state.messages.messages);
  // REVIEW: REMOVE INLINE STYLIIINNNNGGGG
  return (
    <View style={{ width: "100%", position: "absolute" }}>
      <View
        style={{
          border: "15px solid red",
          backgroundColor: "red",
          width: "100%",
        }}
      >
        <Text>Chat name </Text>
        <Image
          src={Profile}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View>
        <MessageList messages={messages} />
      </View>
      <View
        style={{
          position: "steaky",
          width: "90%",
          height: "54px",
          left: "30%px",
          boxSizing: " border-box",
        }}
      ></View>
      <FormMessage />
    </View>
  );
}

export default Room;
