// create a button with styled component
import styled from "styled-components/native";

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Heading = styled.Text`
  font-size: 18;
  font-weight: 600;
  color: #000;
  font-family: "Montserrat";
`;

export const Paragraph = styled.Text`
  font-size: 14;
  font-weight: 100;
  color: #000;
  font-family: "Montserrat";
`;

const ButtonWrapper = styled.View`
  height: 200px;
  width: 150px;
  border-radius: 14px;
`;

const SquaredButton = styled.Button`
  height: 200px;
  width: 150px;
  border-radius: 14px;
`;
