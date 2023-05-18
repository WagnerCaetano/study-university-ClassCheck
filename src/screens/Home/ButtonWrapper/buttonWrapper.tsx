import * as React from "react";
import { Image } from "react-native";
import { Wrapper, ButtonContainer, GradientedButton, ButtonText } from "./styles";

const LocationImage = require("./../../../assets/Images/LOCATION.png");
const IdImage = require("./../../../assets/Images/ID.png");
const InformImage = require("./../../../assets/Images/INFORM.png");
const CalendarImage = require("./../../../assets/Images/CALENDAR.png");

const ButtonWrapper = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <GradientedButton bgColor="#32C2B9">
          <ButtonText>PRESENÇA</ButtonText>
          <Image source={LocationImage} style={{ width: 100, height: 100 }} />
        </GradientedButton>
        <GradientedButton bgColor="#EEC72E">
          <ButtonText>PERFIL</ButtonText>
          <Image source={IdImage} style={{ width: 100, height: 100 }} />
        </GradientedButton>
      </ButtonContainer>
      <ButtonContainer>
        <GradientedButton bgColor="#7BD164">
          <ButtonText>SOBRE</ButtonText>
          <Image source={InformImage} style={{ width: 100, height: 100 }} />
        </GradientedButton>
        <GradientedButton bgColor="#F08638">
          <ButtonText>CALENDÁRIO</ButtonText>
          <Image source={CalendarImage} style={{ width: 155, height: 100 }} />
        </GradientedButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default ButtonWrapper;
