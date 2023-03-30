import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Home";
import messaging from "@react-native-firebase/messaging";
import Toast from "react-native-toast-message";
import toastEmitter from "./src/services/toastEmitter";

export default function App() {
  /*useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      const { body, title } = remoteMessage.notification;

      toastEmitter.emit({
        title,
        subtitle: body,
      });
    });
  }, []);*/

  return (
    <>
      <Home />
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </>
  );
}
