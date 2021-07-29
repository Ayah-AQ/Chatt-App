import React from "react";
import { useSelector } from "react-redux";
//Style
import { BkG, RedBox, RoomBorder } from "../../styles";


import Profile from "../../Picture1.png";
import BG from "../../LQ1QwfcR.jpg";
import { View, Text, Image } from "native-base";
//component
import MessageForm from "./messages/MessageForm";
import MessageList from "./messages/MessageList";

function Room() {
  const messages = useSelector((state) => state.messageReducer.messages);

  return (
    <BkG source={BG}>
  
    <RoomBorder >
      <RedBox
       >
        <Text>Chat name </Text>
        {/* Ask Laila */}
        <Image
          src={Profile}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />

      </RedBox>
      <View>
        <MessageList messages={messages} />
      </View>
      <MessageForm />
    </RoomBorder>
    </BkG>
  );
}

export default Room;
