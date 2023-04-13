import { View, Image, Text } from "react-native";

export function Slide({ data }) {
  return (
    <View
      style={{
        height: "20vh",
        width: "85vw",
      }}
    >
      <Image source={{ uri: data.image }} style={{ width: "85vw", height: "20vh" }}></Image>
    </View>
  );
}
