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

export function PresenteStatus() {
const linkTo = useLinkTo();
const { userInfo }: any = React.useContext(InfoContext);
const jaPassou = userInfo?.historico?.find((item: any) => {
    const dataHoje = item.data.split('/');
    console.log(dataHoje);
    return (
        dataHoje[0] == new Date().getDate() &&
        dataHoje[1] == new Date().getMonth() + 1 &&
        dataHoje[2] == new Date().getFullYear()
    );
});

    return (
        <Container>
            <Rectangle
                style={{
                    backgroundColor: '#7BD164'
                }}
            >
                <ContainerTexto>
                    <Texto>{jaPassou.data}</Texto>
                </ContainerTexto>

                <ContainerImage>
                    <PresenteImage />
                </ContainerImage>

                <ContainerTexto>
                    <Texto2>{userInfo.filho.nome} está presente na sala de aula!</Texto2>
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
