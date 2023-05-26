import { ScrollView, Text, View } from "react-native";
import { Container } from "../../global/ContainerView/container";
import { PersonImage } from "./styles";
import { Heading, Paragraph, Row, TextoHome } from "./styles";
import * as React from "react";
import { CarouselComponent } from "./CarouselPack/carousel";
import ButtonWrapper from "./ButtonWrapper/buttonWrapper";
import { convertDynamoDBToJson, getInfoAluno, getClassDate } from "../../api/classCheckServices";
import { useEffect } from "react";
import { InfoContext, SigninContext } from "../../context/context";

import "../../assets/placeholder/placeholder_aviso.png";

export default function HomePage() {
  const { userData, setUserData }: any = React.useContext(SigninContext);
  const { userInfo, setUserInfo }: any = React.useContext(InfoContext);

  useEffect(() => {
    getInfoAluno(userData.username).then((response) => {
      response = convertDynamoDBToJson(response);
      setUserInfo(response);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    getClassDate().then((response) => {
      console.log(response);
    });
  }, []);

  const slideList = [
    { id: "01", image: "https://photos173431-staging.s3.sa-east-1.amazonaws.com/public/placeholder_aviso.png" },
  ];

  return (
    <Container>
      <Row>
        <View>
          <Heading>Bem-vindo ao ClassCheck</Heading>
          <Paragraph>Vamos te ajudar a manter seu filho seguro</Paragraph>
        </View>
        <PersonImage
          source={{
            uri: "https://photos173431-staging.s3.sa-east-1.amazonaws.com/public/" + userData.username + ".jpg",
          }}
        />
      </Row>
      <Row>
        <CarouselComponent slideList={slideList} />
      </Row>
      <TextoHome>Navegue por aqui</TextoHome>
      <ButtonWrapper />
    </Container>
  );
}
