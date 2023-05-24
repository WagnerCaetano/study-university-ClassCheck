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
import { InfoContext } from "../../context/context";

const HistoricoPage = () => {
  const { userInfo }: any = React.useContext(InfoContext);

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
      {expanded ? (
        <BoxContainer>
          <BoxText>This is an expanded placeholder text inside a box</BoxText>
        </BoxContainer>
      ) : (
        <ListContainer
          data={userInfo.historico}
          renderItem={({ item }) => (
            <ListItem onPress={handleItemPress}>
              <ListItemText>
                {item.data} - {item.hora} - {item.presente ? "Presente" : "Ausente"}
              </ListItemText>
            </ListItem>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default HistoricoPage;
