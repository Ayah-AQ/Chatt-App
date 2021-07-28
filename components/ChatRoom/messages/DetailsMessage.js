import React from "react";

import { Text, View, Image } from "react-native";

const DetailsMessage = ({ message }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          backgroundColor: "#F48444",
          width: "50%",
          height: "50%",
          borderRadius: "5%",
          position: "unset",
          padding: "5%",
          marginTop: "2%",
          color: "black",
        }}
      >
        {message.text}
      </Text>

      {message.image && <Image style={{ display: "none" }} />}
    </View>
  );
};
export default DetailsMessage;
