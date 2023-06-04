import React from "react";
import { View, Text } from "react-native";
import { Texto, Title, Profiles, PersonImage } from "./styles";

const About = () => {
  return (
    <View>
      <Title>Sobre nós</Title>
      <Texto>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Texto>

      <Title>TIME</Title>
      <Profiles>
        <PersonImage
          source={require("../../assets/Images/WagnerProfile.jpeg")}
        />
        <Texto>
          Desenvolvedor Fullstack na CI&T, atualmente no projeto do Itaú,
          trabalho com a stack Angular + Java ❤️ + AWS (aprendendo React e
          NextJs) e cursando o 5º semestre de Ciência da Computação
        </Texto>
      </Profiles>
    </View>
  );
};

export default About;
