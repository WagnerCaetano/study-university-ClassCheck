import * as React from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  ExpandedLabel,
  ExpandedLabelText,
  HeaderLabel,
  BoxContainer,
  BoxText,
  ListContainer,
  ListItem,
  ListItemText,
} from "./styles";
import { useState } from "react";

const HistoricoPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleItemPress = () => {
    setExpanded(true);
  };

  return (
    <Container>
      <Header>
        {expanded ? (
          <ExpandedLabel>
            <ExpandedLabelText>This is the expanded header label</ExpandedLabelText>
          </ExpandedLabel>
        ) : (
          <TouchableOpacity onPress={handleExpand}>
            <HeaderLabel>This is the header label</HeaderLabel>
          </TouchableOpacity>
        )}
      </Header>
      <BoxContainer>
        <BoxText>This is a placeholder text inside a box</BoxText>
      </BoxContainer>
      {expanded ? (
        <BoxContainer>
          <BoxText>This is an expanded placeholder text inside a box</BoxText>
        </BoxContainer>
      ) : (
        <ListContainer>
          <ListItem onPress={handleItemPress}>
            <ListItemText>Item 1</ListItemText>
          </ListItem>
          <ListItem onPress={handleItemPress}>
            <ListItemText>Item 2</ListItemText>
          </ListItem>
          <ListItem onPress={handleItemPress}>
            <ListItemText>Item 3</ListItemText>
          </ListItem>
        </ListContainer>
      )}
    </Container>
  );
};

export default HistoricoPage;
