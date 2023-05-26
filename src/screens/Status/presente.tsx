import * as React from "react";
import { View, Image, Text } from "react-native";
import { Container, ContainerImage, ContainerSeta, ContainerSeta2, ContainerTexto, Rectangle, Texto, Texto2} from "./styles";
import SetaImage from "../../assets/SVGs/SetaImage";
import Seta2Image from "../../assets/SVGs/Seta2Image";
import PresenteImage from "../../assets/SVGs/PresenteImage";


export function Status (){
return (
  <Container>
    
    <Rectangle style={{
            backgroundColor: "#7BD164",}}>
    <ContainerSeta>
    <SetaImage />
    </ContainerSeta>
      <ContainerTexto>
          <Texto>Hoje, 15 de março de 2023</Texto>
        </ContainerTexto>

        <ContainerImage>
          <PresenteImage />
        </ContainerImage>

        <ContainerTexto>
          <Texto2>João está presente na sala de aula!</Texto2>
        </ContainerTexto>

        <ContainerSeta2>
          <Seta2Image />
        </ContainerSeta2>
    </Rectangle>

  </Container>
  )
};
