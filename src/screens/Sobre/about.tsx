import React from "react";
import { View, Text } from "react-native";
import { Texto, Title, Profiles, PersonImage, TextoProfiles } from "./styles";
import SetaImage from "../../assets/SVGs/SetaImage";
import { ContainerSeta } from "../Status/styles";

const About = () => {
  return (
    <View>
      <ContainerSeta>
        <SetaImage onPress={() => aguardeStatusProps.functionCallback!()} />
      </ContainerSeta>

      <Title>SOBRE NÓS</Title>
      <Texto>
        Nosso grupo é composto por entusiastas da tecnologia e estudantes
        dedicados que buscam melhorar a comunicação entre escolas e pais por
        meio de soluções inovadoras. Combinando conhecimentos em desenvolvimento
        de aplicativos móveis, reconhecimento facial e sistemas embarcados,
        desenvolvemos um projeto que visa aprimorar o processo de controle de
        presença dos alunos nas escolas.
      </Texto>

      <Title>TIME</Title>

      <Profiles>
        <PersonImage
          source={require("../../assets/Images/WagnerProfile.jpeg")}
        />
        <TextoProfiles>
          Desenvolvedor Fullstack na CI&T, atualmente no projeto do Itaú,
          trabalho com a stack Angular + Java ❤️ + AWS (aprendendo React e
          NextJs) e cursando o 5º semestre de Ciência da Computação
        </TextoProfiles>
      </Profiles>

      <Profiles>
        <PersonImage source={require("../../assets/Images/GiProfile.jpeg")} />
        <TextoProfiles>
          Gosta de trabalhar com python, tem estudado muito sobre inteligência
          artificial. Atualmente trabalha com engenharia de dados e cursa
          ciência da computação.
        </TextoProfiles>
      </Profiles>

      <Profiles>
        <PersonImage
          source={require("../../assets/Images/LuanaProfile.jpeg")}
        />
        <TextoProfiles>
          Atualmente trabalhando como GP (Gerente de Projeto) na Aoop, um
          startup com foco na implementação de Servicenow. Cursando Análise e
          Desenvolvimento de TI, já em seu último semestre.
        </TextoProfiles>
      </Profiles>

      <Profiles>
        <PersonImage
          source={require("../../assets/Images/HemillyProfile.jpeg")}
        />
        <TextoProfiles>
          Sou formada como técnica em Eletroeletronica,atualmente estou cursando
          o 3° semestre de Analise e Desenvolvimento de Sistemas,e estudando a
          área do Front-end
        </TextoProfiles>
      </Profiles>

      <Profiles>
        <PersonImage source={require("../../assets/Images/GiProfile.jpeg")} />
        <TextoProfiles>
          Gosta de trabalhar com python, tem estudado muito sobre inteligência
          artificial. Atualmente trabalha com engenharia de dados e cursa
          ciência da computação.
        </TextoProfiles>
      </Profiles>

      <Profiles>
        <PersonImage source={require("../../assets/Images/GiProfile.jpeg")} />
        <TextoProfiles>
          Gosta de trabalhar com python, tem estudado muito sobre inteligência
          artificial. Atualmente trabalha com engenharia de dados e cursa
          ciência da computação.
        </TextoProfiles>
      </Profiles>
    </View>
  );
};

export default About;
