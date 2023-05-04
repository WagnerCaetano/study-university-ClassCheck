import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from 'react-native-svg';



const Wrapper = styled(View)`
  margin-top: 50px;
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
          <Image
      source={require('./../../assets/Images/LOCATION.png')}
      style={{ width: 100, height: 100 }}
    />
   

        </Button>
        <Button style={{backgroundColor: '#EEC72E'}}>
          <ButtonText>PERFIL</ButtonText>
          <Image
      source={require('./../../assets/Images/ID.png')}
      style={{ width: 100, height: 100 }}
    />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
      <Button style={{backgroundColor: '#7BD164'}}>
          <ButtonText>SOBRE</ButtonText>
          <Image
      source={require('./../../assets/Images/INFORM.png')}
      style={{ width: 100, height: 100 }}
    />
        </Button>
        <Button style={{backgroundColor: '#F08638'}}>
          <ButtonText>CALENDÁRIO</ButtonText>
          <Image
      source={require('./../../assets/Images/CALENDAR.png')}
      style={{ width: 155, height: 100 }}
    />
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default ButtonWrapper;