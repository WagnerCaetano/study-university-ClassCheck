import styled from "styled-components/native";

export const Wrapper = styled.View`
  margin-top: 50px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GradientedButton = styled.TouchableOpacity`
  width: 156px;
  height: 156px;
  border-radius: 10%;
  margin: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 20px;
`;
