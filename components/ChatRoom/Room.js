
import Profile from "../../Picture1.png";
// import InputEmoji from "react-input-emoji";
import React from "react";
import "./Room.css";
import FormMessage from "./messages/FormMessage";
import MessageList from "./messages/MessageList";
import { useSelector } from "react-redux";
import { View,Text, Image } from "native-base";

function Room() {
  const messages = useSelector((state) => state.messages.messages);

  return (
    <View style={{ width: "100%", position: "absolute" }}>
      <View
        style={{
          border: "15px solid red",
          backgroundColor: "red",
          width: "100%",
        }}
      >
        <Text>Chat name </Text>
        <Image
          src={Profile}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            // left: "85%",
            // top: "1px",
          }}
        />

        {/* <BsTrash
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            left: "93%",
            right: "0.9%",
            top: " 10px",
            bottom: " 90.23%",
          }}
        />

        <BsHeart
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            left: "93%",
            right: "0.9%",
            top: " 50px",
          }}
        /> */}
      </View>
      <View
        className="BigView"
        style={{
          //   overflow: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {/* <View
          className="CircledText"
          style={{
            backgroundColor: "#F48444",
            width: "500px",
            height: "100px",
            borderRadius: "50%",
            position: "unset",
            left: "70%",
            padding: "5%",
            paddingLeft: "10%",
            paddingBottom: "6%",
            marginLeft: "50%",
            marginTop: "2%",
          }}
        >
          <h3>text</h3>
        </View> */}
        <MessageList messages={messages} />
      </View>
      <View
        style={{
          position: "absolute",
          width: "90%",
          height: "54px",
          left: "30%px",
          top: "298%",
          boxSizing: " border-box",
        }}
      >
        {/* <button >  */}

        {/* <View class="input-group">
          <select
            class="form-select"
            id="movie"
            aria-label="Example select with button addon"
            class="col-4"
            name="userId"
            defaultValue={toDo.priority}
            onChange={handleChange}
          >
            <option value="">Type</option> not done
            <option value="1">Owner</option>
            <option value="2">Coach</option>
            <option value="3">Member</option>
          </select>
        </View> */}
      </View>
      <FormMessage />
    </View>
  );
}

export default Room;
