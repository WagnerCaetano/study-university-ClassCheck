import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled(TouchableOpacity)`
  width: 156px;
  height: 156px;
  border-radius: 10%;
  background-color: #ccc;
  margin: 6px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  color: #d31919;
  font-size: 20px;
  font-family: Lato-Bold;
`;

const ButtonWrapper = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Button style={{background: "linear-gradient(#e66465, #9198e5);" }}>PRESENÇA</Button>
        <Button style={{ backgroundColor: "#EEC72E" }}>
          <ButtonText>PERFIL</ButtonText>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button style={{ backgroundColor: "#7BD164" }}>
          <ButtonText>SUPORTE</ButtonText>
        </Button>
        <Button style={{ backgroundColor: "#F08638" }}>
          <ButtonText>CALENDÁRIO</ButtonText>
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default ButtonWrapper;
