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
      <Image source={require("./../../assets/placeholder/placeholder_aviso.png")} style={{ width: "85vw", height: "20vh" }}></Image>
    </View>
  );
}
