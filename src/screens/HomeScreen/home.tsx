import { FlatList, Image, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Container } from "../../Components/Container/container";
import { PersonImage } from "../../Components/PersonImage/styles";
import Carousel from "react-native-basic-carousel";
import { Row } from "./styles";
import { Dimensions } from "react-native";
import React from "react";
import { Slide } from "../../Components/CarouselPack/slide";
import { CarouselComponent } from "../../Components/CarouselPack/carousel";

// Gap stuff
const { width } = Dimensions.get("window");
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

// export a simple home screen component and use styles from styles.ts file as "styled-components"
export default function HomePage() {
  const slideList = Array.from({ length: 4 }).map((_, i) => {
    return {
      id: i,
      image: `https://picsum.photos/1440/2842?random=${i}`,
      title: `This is the title! ${i + 1}`,
      subtitle: `This is the subtitle ${i + 1}!`,
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
    </Container>
  );
}
