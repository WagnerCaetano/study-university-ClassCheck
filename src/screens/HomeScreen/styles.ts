// create a button with styled component
import styled from "styled-components/native";

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
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
