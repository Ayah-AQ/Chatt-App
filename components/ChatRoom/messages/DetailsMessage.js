import { Text, View,Image} from "react-native";
import React from "react";

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
            // left: "70%",
            padding: "5%",
            // paddingLeft: "10%",
            // paddingBottom: "6%",
            // marginLeft: "50%",
            marginTop: "2%",
            color:"black"
          }}
        >
          {message.text}
        </Text>
      
      {message.image ? (
        <Image
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
        <Image style={{ display: "none" }} />
      )}

    </View>
  );
};
export default DetailsMessage;
