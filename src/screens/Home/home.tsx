import { ScrollView, Text, View } from "react-native";
import { Container } from "../../global/ContainerView/container";
import { PersonImage } from "./styles";
import { Heading, Paragraph, Row, TextoHome } from "./styles";
import * as React from "react";
import { CarouselComponent } from "./CarouselPack/carousel";
import ButtonWrapper from "./ButtonWrapper/buttonWrapper";
import { getInfoAluno } from "../../api/classCheckServices";
import { useEffect } from "react";

type HomeProps = {
  navigation: any;
};

export default function HomePage(props: HomeProps) {
  useEffect(() => {
    const run = async () => {
      const response = await getInfoAluno();
      console.log(response);
    };
    run();
  }, []);

  const slideList = [{ id: "01", image: "./../../../assets/placeholder/placeholder_aviso.png" }];

  return (
    <Container>
      <Row>
        <View>
          <Heading>Bem-vindo ao ClassCheck</Heading>
          <Paragraph>Vamos te ajudar a manter seu filho seguro</Paragraph>
        </View>
        <PersonImage source={require("./../../assets/placeholder/ProfilePicture.png")} />
      </Row>
      <Row>
        <CarouselComponent slideList={slideList} />
      </Row>
      <TextoHome>Navegue por aqui</TextoHome>
      <ButtonWrapper />
    </Container>
  );
}
