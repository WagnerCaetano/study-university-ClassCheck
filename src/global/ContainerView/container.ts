import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  width: ${(props) => (props.theme?.width ? props.theme?.width : "100%")};
  flex-direction: ${(props) => (props.theme?.direction ? props.theme?.direction : "column")};
  height: ${(props) => (props.theme?.height ? props.theme?.height : "fit-content")};
  align-self: ${(props) => (props.theme?.align ? props.theme?.align : "center")};
  justify-self: ${(props) => (props.theme?.justify ? props.theme?.justify : "center")};
  padding: ${(props) => (props.theme?.padding ? props.theme?.padding : "1.5em")};
  background: ${(props) => (props.theme?.background ? props.theme?.background : "#fff")};
`;
