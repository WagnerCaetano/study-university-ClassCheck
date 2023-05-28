import * as React from "react";
import {
  Container,
  ContainerImage,
  ContainerSeta,
  ContainerSeta2,
  ContainerTexto,
  ContainerCircle,
  Rectangle,
  Texto,
  Texto2,
} from "./styles";
import SetaImage from "../../assets/SVGs/SetaImage";
import Seta2Image from "../../assets/SVGs/Seta2Image";
import AusenteImage from "../../assets/SVGs/AusenteImage";
import { Ionicons } from '@expo/vector-icons';
import { Text } from "react-native";

export function AusenteStatus() {
  return (
    <Container>
      <Rectangle
        style={{
          backgroundColor: "#F08638",
        }}
      >
        <ContainerSeta>
          <SetaImage />
        </ContainerSeta>
        <ContainerTexto>
          <Texto>15 de março de 2023</Texto>
        </ContainerTexto>

        <ContainerImage>
          <AusenteImage />
        </ContainerImage>

        <ContainerTexto>
          <Texto2>João não está presente na sala de aula!</Texto2>
        </ContainerTexto>

        <ContainerSeta2>
          <Seta2Image />
        </ContainerSeta2>
      </Rectangle>
      
      <ContainerCircle>
      <Ionicons name="school" size={70} color="white" />
      <Text>Ligar para a escola</Text>
      </ContainerCircle>

      <ContainerCircle>
      <Ionicons name="call" size={70} color="white" />
      <Text>Ligar para emergência</Text>
      </ContainerCircle>
      
    </Container>
  );
}
