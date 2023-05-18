import styled from "styled-components/native";

export const Title = styled.Text`
  position: absolute;
  width: ${(props) => props.width || 0};
  height: 29px;
  left: ${(props) => props.left || 0};
  top: ${(props) => props.top || 0};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #026a6c;
`;

export const Input = styled.TextInput`
  position: absolute;
  width: 317px;
  height: 35px;
  left: 29px;
  top: ${(props) => props.top};
  border: 0;
  background: rgba(217, 217, 217, 0.82);
  border-radius: 10px;
`;

export const Description = styled.Text`
  position: absolute;
  left: 35px;
  top: ${(props) => props.top};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 259.1%;
  display: flex;
  align-items: center;
  color: #000000;
`;
