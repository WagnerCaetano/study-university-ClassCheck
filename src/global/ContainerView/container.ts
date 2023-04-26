import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => (props.theme?.colors?.background ? props.theme?.colors?.background : "#fff")};
  display: flex;
  align-items: center;
  padding: 1.5em;
`;
