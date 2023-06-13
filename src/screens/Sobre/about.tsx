import React from 'react';
import { View, Text } from 'react-native';
import {
<<<<<<< HEAD
  Texto,
  Title,
  Profiles,
  PersonImage,
  TextoProfiles,
  Separator,
  ContainerEmail,
  TextEmail,
} from "./styles";
import { Linking } from "react-native";
import { Zocial } from "@expo/vector-icons";

const handleEmailPress = () => {
  const email = "suporteclasscheck@outlook.com.br";
  Linking.openURL(`mailto:${email}`);
};

const About = () => {
  return (
    <View>
      <Title>SOBRE NÓS</Title>
      <Texto>
        Nosso grupo é composto por entusiastas da tecnologia e estudantes
        dedicados que buscam melhorar a comunicação entre escolas e pais por
        meio de soluções inovadoras. Combinando conhecimentos em desenvolvimento
        de aplicativos móveis, reconhecimento facial e sistemas embarcados,
        desenvolvemos um projeto que visa aprimorar o processo de controle de
        presença dos alunos nas escolas.
      </Texto>
=======
    Texto,
    Title,
    Profiles,
    PersonImage,
    TextoProfiles,
    Separator
} from './styles';

const About = () => {
    return (
        <View>
            <Title>SOBRE NÓS</Title>
            <Texto>
                Nosso grupo é composto por entusiastas da tecnologia e
                estudantes dedicados que buscam melhorar a comunicação entre
                escolas e pais por meio de soluções inovadoras. Combinando
                conhecimentos em desenvolvimento de aplicativos móveis,
                reconhecimento facial e sistemas embarcados, desenvolvemos um
                projeto que visa aprimorar o processo de controle de presença
                dos alunos nas escolas.
            </Texto>

            <Separator />
            <Title>TIME</Title>
>>>>>>> 1c2d93906fe13f0deee22c6e803e31086de0bf81

            <Profiles>
                <PersonImage
                    source={require('../../assets/Images/WagnerProfile.jpeg')}
                />
                <TextoProfiles>
                    Desenvolvedor Fullstack na CI&T, atualmente no projeto do
                    Itaú, trabalho com a stack Angular + Java ❤️ + AWS
                    (aprendendo React e NextJs) e cursando o 5º semestre de
                    Ciência da Computação
                </TextoProfiles>
            </Profiles>

<<<<<<< HEAD
      {/* Perfil Gi */}
      <Profiles>
        <PersonImage
          source={require("../../assets/Images/GiProfile.jpeg")}
          style={{ borderWidth: 3, borderColor: "#7BD164" }}
        />
        <TextoProfiles>
          Giovana gosta de trabalhar com python, tem estudado muito sobre
          inteligência artificial. Atualmente trabalha com engenharia de dados e
          cursa ciência da computação.
        </TextoProfiles>
      </Profiles>

      {/* Perfil Hemilly */}
      <Profiles>
        <PersonImage
          source={require("../../assets/Images/HemillyProfile.jpeg")}
          style={{ borderWidth: 3, borderColor: "#EEC72E" }}
        />
        <TextoProfiles>
          Hemilly tem formação técnica em eletroeletronica, atualmente está
          cursando o 3° semestre de Analise e Desenvolvimento de Sistemas, e
          estudando a área do Front-end
        </TextoProfiles>
      </Profiles>

      {/* Perfil Luana */}
      <Profiles>
        <PersonImage
          source={require("../../assets/Images/LuanaProfile.jpeg")}
          style={{ borderWidth: 3, borderColor: "#96948E" }}
        />
        <TextoProfiles>
          Luana atualmente está trabalhando como Gerente de Projeto na Aoop, uma
          startup com foco na implementação de Servicenow. Cursando Análise e
          Desenvolvimento de TI, já em seu último semestre.
        </TextoProfiles>
      </Profiles>

      {/* Perfil Madu */}
      <Profiles>
        <PersonImage
          source={require("../../assets/Images/MaduProfile.jpeg")}
          style={{ borderWidth: 3, borderColor: "#F08638" }}
        />
        <TextoProfiles>
          Maria Eduarda possui formação como técnica de informática, atualmente
          está cursando o 3º semestre de Ciências da Computação e focando seus
          estudos em front-end e na área de de UI/UX
        </TextoProfiles>
      </Profiles>

      {/* Perfil Raquel */}
      <Profiles>
        <PersonImage
          source={require("../../assets/Images/RaquelProfile.jpeg")}
          style={{ borderWidth: 3, borderColor: "#32C2B9" }}
        />
        <TextoProfiles>
          Raquel trabalha como desenvolvedora Drupal na CI&T, gosta da trabalhar
          com front-end e atualmente está focando seus estudos em React JS
        </TextoProfiles>
      </Profiles>

      {/* Perfil Wagner */}
      <Profiles>
        <PersonImage
          source={require("../../assets/Images/WagnerProfile.jpeg")}
          style={{ borderWidth: 3, borderColor: "#026A6D" }}
        />
        <TextoProfiles>
          Wagner é desenvolvedor Fullstack na CI&T, atualmente no projeto do
          Itaú, trabalho com a stack Angular + Java + AWS (aprendendo React e
          NextJs) e cursando o 5º semestre de Ciência da Computação
        </TextoProfiles>
      </Profiles>

      <ContainerEmail>
        <Zocial name="email" size={24} color="#024447" />
        <TextEmail onPress={handleEmailPress}>Contate nosso suporte!</TextEmail>
      </ContainerEmail>
    </View>
  );
=======
            <Profiles>
                <PersonImage
                    source={require('../../assets/Images/GiProfile.jpeg')}
                />
                <TextoProfiles>
                    Gosta de trabalhar com python, tem estudado muito sobre
                    inteligência artificial. Atualmente trabalha com engenharia
                    de dados e cursa ciência da computação.
                </TextoProfiles>
            </Profiles>

            <Profiles>
                <PersonImage
                    source={require('../../assets/Images/LuanaProfile.jpeg')}
                />
                <TextoProfiles>
                    Atualmente trabalhando como GP (Gerente de Projeto) na Aoop,
                    um startup com foco na implementação de Servicenow. Cursando
                    Análise e Desenvolvimento de TI, já em seu último semestre.
                </TextoProfiles>
            </Profiles>

            <Profiles>
                <PersonImage
                    source={require('../../assets/Images/HemillyProfile.jpeg')}
                />
                <TextoProfiles>
                    Sou formada como técnica em Eletroeletronica, atualmente
                    estou cursando o 3° semestre de Analise e Desenvolvimento de
                    Sistemas, e estudando a área do Front-end
                </TextoProfiles>
            </Profiles>

            <Profiles>
                <PersonImage
                    source={require('../../assets/Images/RaquelProfile.jpeg')}
                />
                <TextoProfiles>
                    Desenvolvedora Drupal na CI&T, gosta da trabalhar com
                    front-end e atualmente está estudante React JS
                </TextoProfiles>
            </Profiles>

            <Profiles>
                <PersonImage
                    source={require('../../assets/Images/MaduProfile.jpeg')}
                />
                <TextoProfiles>
                    Cursando o 3º semestre de Ciências da computação, gosta de
                    front-end e de UI/UX
                </TextoProfiles>
            </Profiles>
        </View>
    );
>>>>>>> 1c2d93906fe13f0deee22c6e803e31086de0bf81
};

export default About;
