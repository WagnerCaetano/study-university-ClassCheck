import { Text, View } from "react-native";
import { Container } from "../../global/ContainerView/container";
import { PersonImage } from "../../global/PersonImage/styles";
import { Row } from "./styles";
import React from "react";
import { CarouselComponent } from "../../components/CarouselPack/carousel";
import ButtonWrapper from "../../components/ButtonWrapper/buttonWrapper";

export default function HomePage() {
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
          <Text>Bem-vindo ao ClassCheck</Text>
          <Text>Vamos te ajudar a manter seu filho seguro</Text>
        </View>
        <PersonImage source={require("./../../assets/placeholder/ProfilePicture.png")} />
      </Row>
      <Row>
        <CarouselComponent slideList={slideList} />
      </Row>
      <ButtonWrapper />
    </Container>
  );
}
