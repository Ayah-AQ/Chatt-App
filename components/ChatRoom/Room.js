import React,{useEffect,useRef} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//Style
import { BkG, RedBox, RoomBorder,ChatName, ChatImage } from "../../styles";
import Profile from "../../Picture1.png";
import BG from "../../LQ1QwfcR.jpg";
import {  Icon } from "native-base";
import {
  FontAwesome
} from "@expo/vector-icons";
//component
import MessageForm from "./messages/MessageForm";
import MessageList from "./messages/MessageList";
import { ScrollView } from "react-native-gesture-handler";
import {signout} from "../../store/actions/authActions"

function Room({navigation}) {
  const messages = useSelector((state) => state.messageReducer.messages);
 const el = useRef()
  useEffect(() => {
    el.current.scrollToEnd()
  })
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <BkG source={BG} alt="Img">
    <RoomBorder >
      <RedBox
       >
        <ChatName>Chat name </ChatName>
        <ChatImage
        alt="Img"
          source={Profile}
        />
      </RedBox>
      
      <ScrollView  ref={el}>
        <MessageList messages={messages}  />
      </ScrollView>
      <MessageForm />
      </RoomBorder>
      {user && (
          <Icon
            name="sign-out"
            as={FontAwesome}
            style={{ color: "black" }}
            onPress={() => dispatch(signout()),()=>navigation.navigate("Home")}
            zIndex="1"
          marginTop="70"
        />
        )}
      
    </BkG>
  );
}

export default Room;
