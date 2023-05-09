import * as React from "react";
import { View, Image, Text } from "react-native";

export function Slide({ data }) {
  return (
    <View
      style={{
        display: "flex",
        alignContent: "center",
        height: "20vh",
        width: "85vw",
        padding: 0,
      }}
    >
      <Image source={{ uri: data.image }} style={{ width: "85vw", height: "20vh" }} />
    </View>
  );
}
