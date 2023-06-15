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
import { Text, View, TouchableOpacity } from "react-native";
import call from "react-native-phone-call";
import Seta2Image from '../../assets/SVGs/Seta2Image';
import { useLinkTo } from '@react-navigation/native';
import { InfoContext } from '../../context/context';
import { mapMonths } from '../../utils/daysHelper';

const SchoolCall = () => {
    const args = {
        number: 5519999751576,
        prompt: true
    };

    //Make the call
    call(args).catch(console.error);
};

const PoliceCall = () => {
    const args = {
        number: 190,
        prompt: true
    };

    //Make the call
    call(args).catch(console.error);
};

export function AusenteStatus({ navigation, route }) {
    const linkTo = useLinkTo();
    const { userInfo }: any = React.useContext(InfoContext);

    const handleData = () => {
        const data = route?.params?.data?.split('/');
        console.log(data);
        console.log(`${data[0]} de ${mapMonths[data[1]]} de ${data[2]}`);
        return `${data[0]} de ${mapMonths[data[1]]} de ${data[2]}`;
    };

    return (
        <Container>
            <Rectangle
                style={{
                    backgroundColor: '#F08638'
                }}
            >
                <ContainerTexto>
                    <Texto>{handleData()}</Texto>
                </ContainerTexto>

                <ContainerImage>
                    <AusenteImage />
                </ContainerImage>

                <ContainerTexto>
                    <Texto2>
                        {route.params.nome} não está presente na sala de aula!
                    </Texto2>
                </ContainerTexto>

                <View
                    style={{
                        flexDirection: 'row',
                        gap: 50,
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}
                >
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
                    <TouchableOpacity
                        onPress={() => linkTo('/Historico/historicoPage')}
                    >
                        <Seta2Image />
                    </TouchableOpacity>
                </ContainerSeta2>
            </Rectangle>
        </Container>
    );
}
