import styled from "styled-components/native";

export const Rectangle = styled.View`
      position: fixed;
      padding: 5%;
      text-align: center;
      width: 100%;
      height: 97%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 68px;
      border-bottom-right-radius: 68px;
      align-items: center;
      
 `;
 export const Container = styled.View`
  align-items: center;
  flex: 1;
  display: flex;
`;

export const ContainerTexto = styled.View`
  text-align: center;
`;

export const Texto = styled.Text`
  align-items: center;
  margin-top: 25%;
  color: white;
  font-size: 30px;
  font-weight: 600;
  line-height: 50px;
  display: flex;
`;

export const ContainerImage = styled.View`
  width: 243px;
  height: 243px;
  align-items: center;
  object-fit: cover;
`;

export const Texto2 = styled.Text`
  align-items: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
  line-height: 50px;
  display: flex;
`;

export const ContainerSeta = styled.View`
  position: absolute;
  width: 20px;
  height: 29.09px;
  left: 12px;
  top: 25px;
`;

export const ContainerSeta2 = styled.View`
  align-items: center;
  position: absolute;
  bottom: 15;
`;

export const ContainerCircle = styled.TouchableOpacity`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100px;
  height: 95px;
  background-color: #4F903E;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ViewBotoes = styled.View`
  align-items: center;
  flex-direction: column;
`;