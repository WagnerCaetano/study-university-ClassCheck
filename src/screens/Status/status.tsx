import * as React from "react";
import { Image, Text } from "react-native";
import { Container, ContainerTexto, Rectangle, Texto} from "./styles";


export function Status (){
return (
  <Container>
    <Rectangle>
      <ContainerTexto>
        <Texto>Hoje, 15 de novembro de 2023</Texto>
        </ContainerTexto>
        <Image source={require("./../../assets/Images/ausente.png")} style={{ width: 243, height: 243}} />
        <ContainerTexto>
        <Texto>João não está presente na sala de aula! cuzinho</Texto>
        </ContainerTexto>
    </Rectangle>
  </Container>
  )
};
