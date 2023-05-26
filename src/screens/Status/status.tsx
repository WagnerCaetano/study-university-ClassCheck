import * as React from "react";
import { View, Image, Text } from "react-native";
import { Container, ContainerImage, ContainerTexto, Rectangle, Texto, Texto2} from "./styles";
import AusenteImage from "../../assets/SVGs/AusenteImage";
import School from "../../assets/SVGs/School"
import ClockImage from "../../assets/SVGs/ClockImage";


export function Status (){
return (
  <Container style>
    <Rectangle>
      <ContainerTexto>
          <Texto>15 de novembro de 2023</Texto>
        </ContainerTexto>

        <ContainerImage>
          <ClockImage />
        </ContainerImage>

        <ContainerTexto>
          <Texto2>João não está presente na sala de aula!</Texto2>
        </ContainerTexto>

    </Rectangle>

    <View>
      <School />
    </View>

  </Container>
  )
};
