import { ScrollView, Text, View } from "react-native";
import { Container } from "../../global/ContainerView/container";
import { PersonImage } from "./styles";
import { Heading, Paragraph, Row, TextoHome } from "./styles";
import * as React from "react";
import { CarouselComponent } from "./CarouselPack/carousel";
import ButtonWrapper from "./ButtonWrapper/buttonWrapper";
import { convertDynamoDBToJson, getInfoAluno } from "../../api/classCheckServices";
import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { SigninContext } from "../../context/context";

type HomeProps = {
  navigation: any;
};

export default function HomePage(props: HomeProps) {
  const { userData }: any = React.useContext(SigninContext);
  useEffect(() => {
    const run = async () => {
      let response = await getInfoAluno(userData.username);
      response = convertDynamoDBToJson(response);
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
        <PersonImage source={{ uri: "./../../assets/placeholder/ProfilePicture.png" }} />
      </Row>
      <Row>
        <CarouselComponent slideList={slideList} />
      </Row>
      <TextoHome>Navegue por aqui</TextoHome>
      <ButtonWrapper />
    </Container>
  );
}
