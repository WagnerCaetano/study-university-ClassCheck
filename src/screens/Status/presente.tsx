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

export function PresenteStatus() {
const linkTo = useLinkTo();

    return (
        <Container>
            <Rectangle
                style={{
                    backgroundColor: '#7BD164'
                }}
            >
                <ContainerTexto>
                    <Texto>15 de março de 2023</Texto>
                </ContainerTexto>

                <ContainerImage>
                    <PresenteImage />
                </ContainerImage>

                <ContainerTexto>
                    <Texto2>João está presente na sala de aula!</Texto2>
                </ContainerTexto>

                <ContainerSeta2>

                <TouchableOpacity onPress={() => linkTo('/Historico/historicoPage')}>
                    
                    <Seta2Image />
                
                </TouchableOpacity>
                </ContainerSeta2>

            </Rectangle>
        </Container>
    );
}
