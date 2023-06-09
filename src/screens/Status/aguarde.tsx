import * as React from 'react';
import { View, Image, Text } from 'react-native';
import {
    Container,
    ContainerImage,
    ContainerSeta,
    ContainerSeta2,
    ContainerTexto,
    Rectangle,
    Texto,
    Texto2
} from './styles';
import ClockImage from '../../assets/SVGs/ClockImage';
import SetaImage from '../../assets/SVGs/SetaImage';
import Seta2Image from '../../assets/SVGs/Seta2Image';
import { useNavigation } from '@react-navigation/native';

export interface AguardeStatusProps {
    functionCallback?: () => void;
}

export function AguardeStatus(aguardeStatusProps: AguardeStatusProps) {
    const navigation = useNavigation();

    return (
        <Container>
            <Rectangle
                style={{
                    backgroundColor: '#EEC72E'
                }}
            >
                <ContainerSeta>
                    <SetaImage
                        onPress={() => aguardeStatusProps.functionCallback!()}
                    />
                </ContainerSeta>
                <ContainerTexto>
                    <Texto>Ops, parece que a aula ainda não começou!</Texto>
                </ContainerTexto>

                <ContainerImage>
                    <ClockImage />
                </ContainerImage>

                <ContainerTexto>
                    <Texto2>Volte daqui a pouco!</Texto2>
                </ContainerTexto>

                <ContainerSeta2>
                    <Seta2Image />
                </ContainerSeta2>
            </Rectangle>
        </Container>
    );
}
