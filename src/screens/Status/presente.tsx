import * as React from 'react';
import { View, Image, Text } from 'react-native';
import {
    Container,
    ContainerImage,
    ContainerSeta2,
    ContainerTexto,
    Rectangle,
    Texto,
    Texto2,
} from './styles';
import Seta2Image from '../../assets/SVGs/Seta2Image';
import PresenteImage from '../../assets/SVGs/PresenteImage';
import { useLinkTo } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { InfoContext } from '../../context/context';
import { mapMonths } from '../../utils/daysHelper';

export function PresenteStatus({ navigation, route }) {
    const linkTo = useLinkTo();

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
                    backgroundColor: '#7BD164'
                }}
            >
                <ContainerTexto>
                    <Texto>{handleData()}</Texto>
                </ContainerTexto>

                <ContainerImage>
                    <PresenteImage />
                </ContainerImage>

                <ContainerTexto>
                    <Texto2>
                        {route.params.nome} está presente na sala de aula!
                    </Texto2>
                </ContainerTexto>

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
