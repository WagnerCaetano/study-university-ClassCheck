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
  ContainerSeta2
} from "./styles";
import AusenteImage from "../../assets/SVGs/AusenteImage";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import call from "react-native-phone-call";
import Seta2Image from '../../assets/SVGs/Seta2Image';

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

                <View style={{ flexDirection: 'row', gap: 50 }}>
                    <ViewBotoes>
                        <ContainerCircle onPress={SchoolCall}>
                            <Ionicons name="school" size={60} color="white" />
                        </ContainerCircle>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: '600',
                                marginTop: 5
                            }}
                        >
                            Ligar para{'\n'}escola
                        </Text>
                    </ViewBotoes>

                    <ViewBotoes>
                        <ContainerCircle onPress={PoliceCall}>
                            <Ionicons name="call" size={60} color="white" />
                        </ContainerCircle>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: '600',
                                marginTop: 5
                            }}
                        >
                            Ligar para{'\n'}emergência
                        </Text>
                    </ViewBotoes>
                </View>

                <ContainerSeta2>
                    <Seta2Image />
                </ContainerSeta2>
            </Rectangle>
        </Container>
    );
}
