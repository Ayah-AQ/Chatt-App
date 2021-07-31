import React from "react";

import {Text, View,Image} from "react-native";
import { MessageBox, MessageImage } from "../../../styles";

const DetailsMessage = ({ message }) => {
  return (
    <>
    <View style={{ flexDirection: "column" }}>
      <MessageBox>
        {message.text}
      </MessageBox>

      {message.image ? (
        <MessageImage
          source={{uri:message.image}}        />
             ):<Image style={{display: "none"}}/>}   
  </View>
  </>
  );
};
export default DetailsMessage;
