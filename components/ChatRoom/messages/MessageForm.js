import React, { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
//style
import {  Input } from "native-base";
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import EmojiSelector, { Categories } from "react-native-emoji-selector";

//action
import { addMessage } from "../../../store/actions/messageActions";

const MessageForm = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    text: "",
  });

  const resetForm = () => {
    setMessage({ text: "" });
  };

  const handleSubmit = () => {
    dispatch(addMessage(message));
    resetForm();
  };
// Ask Laila emoji & image upload
  const [image, setImage] = useState(null);

  useEffect(() => {
     (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
    }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });


    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>

         {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View> */}

      <View>
        <Input
          size="sm"
          placeholder="enter text"
          onChangeText={(text) => setMessage({ ...message, text })} //this is the sort version of this code onChangeText={(value) => setUser({ ...user, username: value })} but we put username as an argument to shorten the code because if there is two username it will get shorten from this onChangeText={(username) => setUser({ ...user, username: username })} to the method above
          color="black"
          autoCapitalize="none"
        />
        
            {/* <EmojiSelector
  category={Categories.symbols}
  onEmojiSelected={emoji => console.log(emoji)}/>; */}
        <Button onPress={handleSubmit} title="send"></Button>
      </View>
     
    </View>
  );
};
export default MessageForm;