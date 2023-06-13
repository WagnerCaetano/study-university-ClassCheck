import * as React from 'react';
import {
  Container,
  ContainerImage,
  ContainerTexto,
  ContainerCircle,
  Rectangle,
  Texto,
  Texto2,
  ViewBotoes,
} from "./styles";
import AusenteImage from "../../assets/SVGs/AusenteImage";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import call from "react-native-phone-call";
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

const svgString = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2L3 9h3v13h12V9h3L12 2zm0 16H9v-3h3v3zm0-5H9V7h3v6z"/>
  </svg>
`;

const Seta2Image = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navegar para a página desejada
    navigation.navigate('historicoPage');
  };

const SchoolCall = () => {
  const args = {
    number: 5519999751576,
    prompt: true,
  };

  //Make the call
  call(args).catch(console.error);
};

const PoliceCall = () => {
  const args = {
    number: 190,
    prompt: true,
  };

  //Make the call
  call(args).catch(console.error);
};

export function AusenteStatus() {
    return (
        <Container>
            <Rectangle
                style={{
                    backgroundColor: '#F08638'
                }}
            >
                <ContainerTexto>
                    <Texto>15 de março de 2023</Texto>
                </ContainerTexto>

                <ContainerImage>
                    <AusenteImage />
                </ContainerImage>

                <ContainerTexto>
                    <Texto2>João não está presente na sala de aula!</Texto2>
                </ContainerTexto>

        <View style={{ flexDirection: "row", gap: 50 }}>
          <ViewBotoes>
            <ContainerCircle onPress={SchoolCall}>
              <Ionicons name="school" size={60} color="white" />
            </ContainerCircle>
            <Text style={{ color: "white", fontWeight: "600", marginTop: 5 }}>
              Ligar para{"\n"}escola
            </Text>
          </ViewBotoes>

          <ViewBotoes>
            <ContainerCircle onPress={PoliceCall}>
              <Ionicons name="call" size={60} color="white" />
            </ContainerCircle>
            <Text style={{ color: "white", fontWeight: "600", marginTop: 5 }}>
              Ligar para{"\n"}emergência
            </Text>
          </ViewBotoes>
        </View>

        <TouchableOpacity onPress={handlePress}>
      <SvgXml xml={Seta2Image} width="24" height="24" />
    </TouchableOpacity>
      </Rectangle>
    </Container>
  );
}
