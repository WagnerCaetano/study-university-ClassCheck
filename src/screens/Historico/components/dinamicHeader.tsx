import React from "react";
import { TouchableOpacity } from "react-native";
import { Header, HeaderLabel } from "../styles";

export const DinamicHeader = (props: any): any => {
  return (
    <Header bgColor={props.data.color}>
      <TouchableOpacity onPress={() => props.data.functionCallback()}>
        <HeaderLabel>{props.data.text}</HeaderLabel>
      </TouchableOpacity>
    </Header>
  );
};
