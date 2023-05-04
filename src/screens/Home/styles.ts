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
  font-weight: 700;
  color: #026A6C;
  font-family: 'Montserrat-Regular';
  
`;

export const Paragraph = styled.Text`
  font-size: 14;
  font-weight: 100;
  color: #000;
  font-family: "Montserrat";
`;

export const ButtonWrapper = styled.View`
  height: 250px;
  width: 150px;
  border-radius: 14px;
`;

const SquaredButton = styled.Button`
  height: 200px;
  width: 150px;
  border-radius: 14px;
`;
export const TextoHome = styled.Text`
  color: #026A6C;
  position: absolute;
  width: 242px;
  height: 23px;
  left: 30px;
  top: 41%;
  font-family: 'Montserrat-Regular';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
`;