import React, { useState } from "react";
//redux
import { useDispatch } from "react-redux";

import { View } from "react-native";

import { Button, Input } from "native-base";

//action
import { addMessage } from "../../../store/actions/messageActions";
const FormMessage = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    image: "",
    text: "",
  });

  const resetForm = () => {
    setMessage({ text: "" });
  };
  // REVIEW: You're copy pasting code from Reactjs without reading it :))))
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(message));
    resetForm();
    console.log(message);
  };

  return (
    // Why 2 Views?
    <View>
      <View>
        <Input
          size="sm"
          placeholder="enter text"
          onChangeText={(text) => setMessage({ ...message, text })} //this is the sort version of this code onChangeText={(value) => setUser({ ...user, username: value })} but we put username as an argument to shorten the code because if there is two username it will get shorten from this onChangeText={(username) => setUser({ ...user, username: username })} to the method above
          color="black"
          autoCapitalize="none"
        />
        <Button onPress={handleSubmit}>send</Button>
      </View>
    </View>
  );
};
export default FormMessage;
