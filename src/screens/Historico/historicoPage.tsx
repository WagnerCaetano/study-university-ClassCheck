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
import { useNavigation } from "@react-navigation/native";
import { convertDynamoDBToJson, getClassDate } from "../../api/classCheckServices";

const HistoricoPage = () => {
  const navigation = useNavigation<any>();
  const { userInfo }: any = useContext(InfoContext);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [days, setDays] = useState([]);

  React.useEffect(() => {
    getClassDate().then((response) => {
      const responseConverted: any = convertDynamoDBToJson(response, "Items");
      setDays(responseConverted);
    });
  }, []);

  const handleFilter = (day: string) => {
    if (day === selectedDay) {
      setSelectedDay("");
      return;
    }
    setSelectedDay(day);
  };

  const handleNavigationCard = (item) => {
    item.presente ? navigation.navigate("PresenteStatus") : navigation.navigate("AusenteStatus");
  };

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => console.log("clicou no botao")}>
          <HeaderLabel>Histórico de presença</HeaderLabel>
        </TouchableOpacity>
      </Header>
      <RowFilter>
        {days.map((item) => {
          return (
            <FilterButton
              key={item["lista-dias-aulas"]}
              active={selectedDay === item["lista-dias-aulas"]}
              activeOpacity={0.5}
              onPress={() => handleFilter(item["lista-dias-aulas"])}
            >
              <Text>{item["lista-dias-aulas"]}</Text>
            </FilterButton>
          );
        })}
      </RowFilter>
      {userInfo?.historico?.some((item: any) => (selectedDay === "" ? true : item.dia === selectedDay)) ? (
        <ListContainer
          data={userInfo.historico.filter((item: any) => (selectedDay === "" ? item : item.dia === selectedDay))}
          renderItem={({ item }) => (
            <ListItem present={item.presente} onPress={handleNavigationCard}>
              <ListItemText>
                {item.dia} - {item.data} - {item.hora} - {item.presente ? "Presente" : "Ausente"}
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
    </Container>
  );
};

export default HistoricoPage;
