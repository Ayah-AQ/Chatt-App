import React from "react";
import { useSelector } from "react-redux";
//Style
import { BkG, RedBox, RoomBorder,ProfileImage } from "../../styles";

import profile from "../../Picture1.png";
import BG from "../../BG.png";
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
        <ProfileImage
          source={profile}
        
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
