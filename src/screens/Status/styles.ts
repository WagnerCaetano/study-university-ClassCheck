import styled from "styled-components/native";

export const Rectangle = styled.View`
      flex:1;
      background-color: #F08638;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 68px;
      border-bottom-right-radius: 68px;
      align-items: center;
      
 `;
 export const Container = styled.View`
  flex: 1;
  display: flex;
`;

export const ContainerTexto = styled.View`
  text-align: center;
`;

export const Texto = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 600;
  line-height: 39px;
  display: flex;
`;