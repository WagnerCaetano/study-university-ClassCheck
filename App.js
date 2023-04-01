<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import Login from './src/Login/login';
=======
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Home";
import messaging from "@react-native-firebase/messaging";
import Toast from "react-native-toast-message";
import toastEmitter from "./src/services/toastEmitter";
>>>>>>> a6c2221d44001ebeef2d14b550acf7320adbf479

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
<<<<<<< HEAD
    <Home/>,
    <Login/>
=======
    <>
      <Home />
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </>
>>>>>>> a6c2221d44001ebeef2d14b550acf7320adbf479
  );
}
