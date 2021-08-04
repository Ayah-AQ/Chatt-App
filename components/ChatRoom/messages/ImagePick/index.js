import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import BG from "../../../../LQ1QwfcR.jpg"
import * as ImagePicker from 'expo-image-picker';
import { BkG } from '../../../../styles';
import { width } from 'styled-system';
import { createFormData } from '../../../../store/actions/messageActions';


function ImgPick() {
  const [pickedImagePath, setPickedImagePath] = useState('');

  const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

   
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  }

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      // console.log(result.uri);
    }
  }
handleUploadPhoto = () => {
  fetch("http://localhost:3000/api/upload", {
    method: "POST",
    body: createFormData(this.state.photo, { userId: "123" })
  })
    .then(response => response.json())
    .then(response => {
      console.log("upload succes", response);
      alert("Upload success!");
      this.setState({ photo: null });
    })
    .catch(error => {
      console.log("upload error", error);
      alert("Upload failed!");
    });
};
  return (
    <BkG source={BG} alt="Img">

    <View style={{marginTop:150}}>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Select an image" />
        <Button onPress={openCamera} title="Open camera" />
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View >
      <View style={{width:60,marginLeft:"42%"}}>
      <Button title="send" onPress={handleUploadPhoto}></Button>
      </View>
    </View>
    </BkG>
  );
 }

 export default ImgPick;

 const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }
 });