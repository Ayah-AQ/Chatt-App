import React from "react";

import {View} from "react-native";
import { MessageBox } from "../../../styles";

const DetailsMessage = ({ message }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <MessageBox>
        {message.text}
      </MessageBox>

{/* Ask Laila */}
      {message.image ? (
        <img
          src={message.image}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "10%",
            marginLeft: "55%",
            padding: "1%",
          }}
        />
      ) : (
        <img style={{ display: "none" }} />
      )}    </View>
  );
};
export default DetailsMessage;
