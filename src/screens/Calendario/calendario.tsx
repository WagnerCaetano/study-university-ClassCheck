import React from "react";
import { Text } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "../../global/ContainerView/container";
import { Calendar } from "react-native-calendars";
import ButtonBack from "../../components/ButtonBack/button-blue";
import GreenButton from "../../assets/Presenca-green-button.svg";

const theme = {
  colors: {
    background: "#32C2B9",
  },
};

const Card = styled.img`
    position: absolute;
    left: 40px;
    top: 190px;
`

const Titulo = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  top: 119px;
  position: absolute;
  text-transform: uppercase;
`
const Subtitulo = styled.p`
  left: 71px;
  top: 154px;

  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 259.1%;
  color: #FFFFFF;

`
const Presenca = styled.p`
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 259.1%;
  top: 640px;
  color: #FFFFFF;
`
const Detalhes = styled.p`
  position: absolute;
  left: 27px;
  top: 727px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 190.1%;
  color: #FFFFFF;
  text-align: center;
`
export default function CalendarioPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme}>
        <ButtonBack/>
        <Titulo>Calendário das Aulas</Titulo>
        <Card src={GreenButton}/>
        <Subtitulo>Dias que ele deve comparecer a aula</Subtitulo>
        <Calendar
          // Customize the appearance of the calendar
          style={{
            backgroundColor: "#333333",
            borderWidth: 1,
            borderColor: "gray",
            height: 350,
            borderRadius: 14,
            top: 248,
          }}
          // Specify the current date
          current={"2023-04-26"}
          // Callback that gets called when the user selects a day
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Mark specific dates as marked
          markedDates={{
            "2023-04-01": { selected: true, marked: true, selectedColor: "green" },
            "2023-04-02": { marked: true },
            "2023-04-03": { selected: true, marked: true, selectedColor: "green" },
          }}
        />
        <Presenca>Porcentagem de presença: 75,3%</Presenca>
        <Detalhes>O aluno está dentro da porcentagem esperada de presença! Tudo certo por aqui</Detalhes>
      </Container>
    </ThemeProvider>
  );
}
