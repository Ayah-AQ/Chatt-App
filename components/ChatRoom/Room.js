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
import { ScrollView } from "react-native-gesture-handler";
import ImgPick from "./messages/ImagePick/index.js";
import { zIndex } from "styled-system";

function Room() {
  const messages = useSelector((state) => state.messageReducer.messages);

  return (
    <BkG source={BG} alt="Img">
    <RoomBorder >
      <RedBox
       >
        <Text style={{position: "absolute",marginLeft:"70%",marginTop:40, }}>Chat name </Text>
        <Image
        alt="Img"
          source={Profile}
          style={{
            width: 90,
            height: 90,
            marginTop:14,
            zIndex:1
          }}
        />
      </RedBox>
      
      <ScrollView>
        <MessageList messages={messages} />
      </ScrollView>
      <MessageForm />
      </RoomBorder>
      <View type="button" style={{marginLeft:20,marginTop:"150%", }}>
       </View>
    </BkG>
  );
}

export default Room;
