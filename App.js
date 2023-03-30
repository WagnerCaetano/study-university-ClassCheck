import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Home";
import { getDeviceToken } from "./src/services/firebase";

export default function App() {
  useEffect(() => {
    getDeviceToken().then((id) => console.log(id));
  }, []);

  return <Home />;
}
