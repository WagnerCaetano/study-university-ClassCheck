import { ReactDOM, ReactElement } from "react";
import { FlatList } from "react-native/Libraries/Lists/FlatList";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
`;

export const Header = styled.View`
  height: 60px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const HeaderLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const BoxContainer = styled.View`
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  elevation: 5;
`;

export const BoxText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ListContainer = styled.FlatList`` as typeof FlatList;

export const ListItem = styled.TouchableOpacity`
  background-color: #fff;
  padding: 20px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const ListItemText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ExpandedLabel = styled.View`
  height: 100px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const ExpandedLabelText = styled.Text`
  font-size: 16px;
  color: #333;
`;
