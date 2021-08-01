import React from "react";

import { View,Image} from "react-native";
import { MessageBox, MessageImage } from "../../../styles";

const DetailsMessage = ({ message }) => {
  return (
    <>
    <View style={{ 
      height:150
        }}>
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
