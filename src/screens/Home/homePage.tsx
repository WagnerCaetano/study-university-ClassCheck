import { Image, View } from 'react-native';
import { Container } from '../../global/container/container';
import {
    ButtonContainer,
    ButtonText,
    Column,
    GradientedButton,
    PersonImage,
    Wrapper
} from './styles';
import { Heading, Paragraph, Row, TextoHome } from './styles';
import * as React from 'react';
import { CarouselComponent } from './components/CarouselWrapper/carousel';
import {
    convertDynamoDBToJson,
    getInfoAluno,
    getClassDate
} from '../../api/classCheckServices';
import { useEffect } from 'react';
import { InfoContext, SigninContext } from '../../context/context';
import { useNavigation } from '@react-navigation/native';

const LocationImage = require('./../../assets/Images/LOCATION.png');
const IdImage = require('./../../assets/Images/ID.png');
const InformImage = require('./../../assets/Images/INFORM.png');
const CalendarImage = require('./../../assets/Images/CALENDAR.png');

export default function HomePage({ navigation }) {
    const navigationStack = useNavigation<any>();
    const { userData, setUserData }: any = React.useContext(SigninContext);
    const { userInfo, setUserInfo }: any = React.useContext(InfoContext);

    const handlePressPresencaHoje = () => {
        const jaTemDados = userInfo?.historico?.find((item: any) => {
            const dataHoje = item.data.split('/');
            return (
                dataHoje[0] == new Date().getDate() &&
                dataHoje[1] == new Date().getMonth() + 1 &&
                dataHoje[2] == new Date().getFullYear()
            );
        });
        if (jaTemDados && jaTemDados.presente) {
            navigationStack.navigate('PresenteStatus', {
                data: jaTemDados.data,
                nome: userInfo.filho?.nome?.split(' ')[0]
            });
        } else if (jaTemDados && !jaTemDados.presente) {
            navigationStack.navigate('AusenteStatus', {
                data: jaTemDados.data,
                nome: userInfo.filho?.nome?.split(' ')[0]
            });
        } else {
            navigationStack.navigate('AguardeStatus');
        }
    };

    useEffect(() => {
        getInfoAluno(userData.username).then((response) => {
            response = convertDynamoDBToJson(response);
            setUserInfo(response[0]);
            console.log(response[0]);
        });
    }, []);

    useEffect(() => {
        getClassDate().then((response) => {
            response = convertDynamoDBToJson(response, 'Items');
        });
    }, []);

    const slideList = [
        {
            id: '01',
            image: 'https://photos173431-staging.s3.sa-east-1.amazonaws.com/public/aviso1.png'
        },
        {
            id: '02',
            image: 'https://photos173431-staging.s3.sa-east-1.amazonaws.com/public/aviso2.png'
        }
    ];

    const StatusPresente = true;

    return (
        <Container>
            <Row>
                <View>
                    <Heading>Bem-vindo ao ClassCheck</Heading>
                    <Paragraph>
                        Vamos te ajudar a manter seu filho{'\n'}seguro
                    </Paragraph>
                </View>
                <PersonImage
                    source={{
                        uri:
                            'https://photos173431-staging.s3.sa-east-1.amazonaws.com/public/' +
                            userData.username +
                            '.jpg'
                    }}
                />
            </Row>
            <Row>
                <CarouselComponent slideList={slideList} />
            </Row>

            <Column>
                <TextoHome>Navegue por aqui</TextoHome>
                <Wrapper>
                    <ButtonContainer>
                        <GradientedButton
                            onPress={handlePressPresencaHoje}
                            bgColor="#32C2B9"
                        >
                            <ButtonText>PRESENÇA</ButtonText>
                            <Image
                                source={LocationImage}
                                style={{ width: 100, height: 100 }}
                            />
                        </GradientedButton>
                        <GradientedButton
                            onPress={() => navigation.jumpTo('Perfil')}
                            bgColor="#EEC72E"
                        >
                            <ButtonText>PERFIL</ButtonText>
                            <Image
                                source={IdImage}
                                style={{ width: 100, height: 100 }}
                            />
                        </GradientedButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <GradientedButton
                            onPress={() => navigationStack.navigate('about')}
                            bgColor="#7BD164"
                        >
                            <ButtonText>SOBRE</ButtonText>
                            <Image
                                source={InformImage}
                                style={{ width: 100, height: 100 }}
                            />
                        </GradientedButton>
                        <GradientedButton
                            onPress={() =>
                                navigationStack.navigate('Calendario')
                            }
                            bgColor="#F08638"
                        >
                            <ButtonText>CALENDÁRIO</ButtonText>
                            <Image
                                source={CalendarImage}
                                style={{ width: 155, height: 100 }}
                            />
                        </GradientedButton>
                    </ButtonContainer>
                </Wrapper>
            </Column>
        </Container>
    );
}
