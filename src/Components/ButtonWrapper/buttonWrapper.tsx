import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from 'react-native-svg';



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
  margin: 6px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-family: Lato-Bold;
`;

const ButtonWrapper = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Button style={{backgroundColor: '#17A1FA'}}>
          <ButtonText>PRESENÇA</ButtonText>
      <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="none" strokeWidth=".5" fill="violet" />
      </Svg>
   

        </Button>
        <Button style={{backgroundColor: '#EEC72E'}}>
          <ButtonText>PERFIL</ButtonText>
          <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="none" strokeWidth=".5" fill="yellow" />
      </Svg>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
      <Button style={{backgroundColor: '#7BD164'}}>
          <ButtonText>SUPORTE</ButtonText>
          <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="none" strokeWidth=".5" fill="red" />
      </Svg>
        </Button>
        <Button style={{backgroundColor: '#F08638'}}>
          <ButtonText>CALENDÁRIO</ButtonText>
          <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="none" strokeWidth=".5" fill="blue" />
      </Svg>
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default ButtonWrapper;