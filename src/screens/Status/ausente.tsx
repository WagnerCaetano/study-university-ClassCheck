import * as React from "react";
import {
  Container,
  ContainerImage,
  ContainerSeta,
  ContainerSeta2,
  ContainerTexto,
  Rectangle,
  Texto,
  Texto2,
} from "./styles";
import SetaImage from "../../assets/SVGs/SetaImage";
import Seta2Image from "../../assets/SVGs/Seta2Image";
import PresenteImage from "../../assets/SVGs/PresenteImage";

export function AusenteStatus() {
  return (
    <Container>
      <Rectangle
        style={{
          backgroundColor: "#d16464",
        }}
      >
        <ContainerSeta>
          <SetaImage />
        </ContainerSeta>
        <ContainerTexto>
          <Texto>teste teste</Texto>
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
  );
}
