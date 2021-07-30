import React from "react";

import {View,Text} from "react-native";
import { MessageBox,MessageImage } from "../../../styles";

const MessageDetails = ({ message }) => {
  return (
   <>
    <View style={{ flexDirection: "column" }}>
       <MessageBox>
       {message.text}
      </MessageBox> 

      {message.image && (
        <MessageImage
          source={message.image}
        />
   ) }     
    </View>
      </>
  );
};
export default MessageDetails;
