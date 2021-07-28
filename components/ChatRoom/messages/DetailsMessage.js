import React from "react";

import { Text, View, Image } from "react-native";

// REVIEW: inconsistent in naming, all components should be consistent:
// MessageDetails / MessageForm / MessageList
const DetailsMessage = ({ message }) => {
  return (
    // Remove inline styling, move it into its own file
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
      {/* How are you rendering the image? */}
      {message.image && <Image style={{ display: "none" }} />}
    </View>
  );
};
export default DetailsMessage;
