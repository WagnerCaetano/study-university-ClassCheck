import { ScrollView, Text, View } from "react-native";
import { Container } from "../../global/ContainerView/container";
import { PersonImage } from "../../global/PersonImage/styles";
import { Heading, Paragraph, Row } from "./styles";
import React from "react";
import { CarouselComponent } from "../../components/CarouselPack/carousel";
import ButtonWrapper from "../../components/ButtonWrapper/buttonWrapper";

type HomeProps = {
  navigation: any;
};

export default function HomePage(props: HomeProps) {
  const slideList = Array.from({ length: 4 }).map((_, i) => {
    return {
      id: i,
      image: `https://picsum.photos/1440/2842?random=${i}`,
    };
  });

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
      <Heading>Navegue por aqui</Heading>
      <ButtonWrapper />
    </Container>
  );
}
