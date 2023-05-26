import * as React from "react";
import { View, Image, Text } from "react-native";
import { Container, ContainerImage, ContainerSeta, ContainerSeta2, ContainerTexto, Rectangle, Texto, Texto2} from "./styles";
import ClockImage from "../../assets/SVGs/ClockImage";
import SetaImage from "../../assets/SVGs/SetaImage";
import Seta2Image from "../../assets/SVGs/Seta2Image";


export function Status (){
return (
  <Container>
    
    <Rectangle style={{
            backgroundColor: "#EEC72E",}}>
    <ContainerSeta>
    <SetaImage />
    </ContainerSeta>
      <ContainerTexto>
          <Texto>Ops, parece que a aula ainda não começou!</Texto>
        </ContainerTexto>

        <ContainerImage>
          <ClockImage />
        </ContainerImage>

        <ContainerTexto>
          <Texto2>Volte daqui a pouco!</Texto2>
        </ContainerTexto>

        <ContainerSeta2>
          <Seta2Image />
        </ContainerSeta2>
    </Rectangle>

  </Container>
  )
};
