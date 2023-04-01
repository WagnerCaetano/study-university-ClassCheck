import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Home() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ClassCheck</Text>
      <Image style={styles.img} source={require("../../assets/menu-hamburguer.svg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(4, 105, 56, 0.87);",
    height: 68,
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    lineHeight: 32,
    letterSpacing: 0.64,
    color: "rgba(255, 255, 255, 0.65);",
  },
  img: {
    position: "absolute",
    width: 30,
    height: 30,
    left: 13,
  },
});

export default Home;
