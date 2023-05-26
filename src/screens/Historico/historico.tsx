import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  HeaderLabel,
  ListContainer,
  ListItem,
  ListItemText,
  FilterButton,
  RowFilter,
} from "./styles";
import { useContext, useState } from "react";
import { InfoContext } from "../../context/context";
import { Status } from "../Status/status";

const HistoricoPage = () => {
  const { userInfo }: any = useContext(InfoContext);

  const [selectedDay, setSelectedDay] = useState<string>("");
  const [expanded, setExpanded] = useState(false);

  const handleItemPress = () => {};

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => console.log("clicou no botao")}>
          <HeaderLabel>Histórico de presença</HeaderLabel>
        </TouchableOpacity>
      </Header>
      {expanded ? (
        <>
          <FilterButton onPress={() => setExpanded(false)}>
            <Text>Voltar</Text>
          </FilterButton>
          <Status />
        </>
      ) : (
        <>
          <RowFilter>
            <FilterButton activeOpacity={0.5} onPress={() => setSelectedDay("segunda")}>
              <Text>Segunda</Text>
            </FilterButton>
            <FilterButton activeOpacity={0.5} onPress={() => setSelectedDay("terca")}>
              <Text>Terça</Text>
            </FilterButton>
            <FilterButton activeOpacity={0.5} onPress={() => setSelectedDay("quarta")}>
              <Text>Quarta</Text>
            </FilterButton>
            <FilterButton activeOpacity={0.5} onPress={() => setSelectedDay("quinta")}>
              <Text>Quinta</Text>
            </FilterButton>
            <FilterButton activeOpacity={0.5} onPress={() => setSelectedDay("sexta")}>
              <Text>Sexta</Text>
            </FilterButton>
          </RowFilter>
          {userInfo?.historico?.some((item: any) => (selectedDay === "" ? true : item.dia === selectedDay)) ? (
            <ListContainer
              data={userInfo.historico.filter((item: any) => (selectedDay === "" ? item : item.dia === selectedDay))}
              renderItem={({ item }) => (
                <ListItem present={item.presente} onPress={() => setExpanded(true)}>
                  <ListItemText>
                    {item.data} - {item.hora} - {item.presente ? "Presente" : "Ausente"}
                  </ListItemText>
                </ListItem>
              )}
              keyExtractor={(item) => item.id + item.data}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
            />
          ) : (
            <RowFilter>
              <Text>Não há dados nesse dia ainda</Text>
            </RowFilter>
          )}
        </>
      )}
    </Container>
  );
};

export default HistoricoPage;
