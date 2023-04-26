import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components";
import { Container } from "../../global/ContainerView/container";
import { Calendar } from "react-native-calendars";

const theme = {
  colors: {
    background: "#32C2B9",
  },
};

export default function CalendarioPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme}>
        <Calendar
          // Customize the appearance of the calendar
          style={{
            borderWidth: 1,
            borderColor: "gray",
            height: 350,
          }}
          // Specify the current date
          current={"2012-03-01"}
          // Callback that gets called when the user selects a day
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Mark specific dates as marked
          markedDates={{
            "2012-03-01": { selected: true, marked: true, selectedColor: "blue" },
            "2012-03-02": { marked: true },
            "2012-03-03": { selected: true, marked: true, selectedColor: "blue" },
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
