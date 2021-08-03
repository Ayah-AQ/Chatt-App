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
import {signout,fetchProfiles} from "../../store/actions/authActions"

function Room({navigation}) {
  const messages = useSelector((state) => state.messageReducer.messages);
 const el = useRef()
  useEffect(() => {
    el.current.scrollToEnd()
  })

  const dispatch = useDispatch();
  const users = useSelector((state) => state.authReducer.user);
  console.log("room",users);
      useEffect(() => {
    dispatch(fetchProfiles(users.id));
  }, []);
  return (
    <BkG source={BG} alt="Img">
    <RoomBorder >
      <RedBox
       >
        <ChatName>{users.username} </ChatName>
        <ChatImage
        alt="Img"
          source={users.image}
          // style={{borderRadius:"50%"}}
        />
      </RedBox>
      
      <ScrollView  ref={el}>
        <MessageList messages={messages}  />
      </ScrollView>
      <MessageForm />
      </RoomBorder>
       
    </BkG>
  );
}

export default Room;
