import React from "react";

import { useSelector } from "react-redux";
import { Button, Text ,View, Image,TouchableOpacity} from "react-native";
import { List} from "native-base";
// import { Link, useParams } from "react-router-dom";
//styles
// import {
//   ChatItemImage,
//   ChatItemDiv,
//   ChatItemH2,
//   ChatItemH6,
// } from "../../../styles";
//components
// import FullPage from "../../FullPage/FullPage";

const ChatItem = ({ chat,navigation }) => {
  const _user = useSelector((state) => state.authReducer.user);

  const month = chat.updatedAt.substring(10, -1);
  const hourly = chat.updatedAt.substring(11, 16);
  const time = `${month}-${hourly}`;
  console.log(navigation);
  if (chat.users.length === 2) {
    let otherUser = chat.users.find((a) => a.id !== _user.id);
    chat.name = otherUser.username;
    chat.image = otherUser.image;
  }
  return (
    <>
      <List.Item onPress={() => navigation.navigate("Room",{chat})}>
        <View className="container">
          <Image source={{uri:chat.image}} alt={chat.name} />
          <Text>{chat.name}</Text>
          <Text>{time}</Text>
        </View>
      </List.Item>
    </>
  );
};
export default ChatItem;
