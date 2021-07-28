import React from "react";
import { Provider } from "react-redux";

// Styling
import BG from "./LQ1QwfcR.jpg";
import { NativeBaseProvider } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";

// Store
import store from "./store";

// Component
import Room from "./components/ChatRoom/Room";

export default function App() {
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: "100%",
      }}
      source={BG}
    >
      <Provider store={store}>
        <NativeBaseProvider>
          <Room />
        </NativeBaseProvider>
      </Provider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
