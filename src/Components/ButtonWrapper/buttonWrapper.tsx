import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styled from "styled-components/native";

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
  color: #fff;
  font-size: 20px;
`;

const ButtonWrapper = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Button>
          <Image source={{ uri: "https://picsum.photos/1440/2842?random=1" }} style={{ width: "100%", height: "100%" }}></Image>
          <ButtonText>Button 1</ButtonText>
        </Button>
        <Button>
          <ButtonText>Button 2</ButtonText>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>
          <ButtonText>Button 3</ButtonText>
        </Button>
        <Button>
          <ButtonText>Button 4</ButtonText>
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default ButtonWrapper;
