// import React from "react";

// //components
// import Room from "../ChatRoom/Room";
// import ChatList from "../ChatRoom/sideBarContact/ChatList";
// import { Button, Text ,View, Image} from "react-native";

// //styles
// import { FullPageDiv } from "../../styles";
// import { useDispatch, useSelector } from "react-redux";
// import ChatPrivate from "../ChatRoom/chats/ChatPrivate";
// import { fetchMessages } from "../../store/actions/messageActions";
// import { useEffect, useState } from "react";

// const FullPage = () => {
//   const dispatch = useDispatch();
//   // const [refresh, setRefresh] = useState();
//   const user = useSelector((state) => state.authReducer.user);
//   const chat = useSelector((state) => state.chatReducer.chats);
//   //Very Important
//   //ToDo
//   //Uncomment the comment
//   // useEffect(() => {
//   //   const intervalID = setInterval(() => {
//   //     console.log("here");
//   //     dispatch(fetchMessages());
//   //   }, 3000);
//   //   return () => clearInterval(intervalID);
//   // }, []);
//   return (
//     <View>
//       <View style={{ alignSelf: "self-start" }}>
//       <Text> <ChatList /> </Text>
//       </View>
//       {/* <div style={{ alignSelf: "self-end" }}>
//         <Room />
//       </div> */}
   
//     <Button title="button" onPress={()=>navigation.navigate("Room")}></Button> </View>
//   );
// };
// export default FullPage;
