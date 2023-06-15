import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
    Container,
    Header,
    HeaderLabel,
    ListContainer,
    ListItem,
    ListItemText,
    FilterButton,
    RowFilter
} from './styles';
import { useContext, useState } from 'react';
import { InfoContext } from '../../context/context';
import { useNavigation } from '@react-navigation/native';
import {
    convertDynamoDBToJson,
    getClassDate
} from '../../api/classCheckServices';
import { doesTodayHaveClasses } from '../../utils/daysHelper';
import { DinamicHeader } from './components/dinamicHeader';

const mapStateAulasHoje = (navigation, userInfo): any => ({
    presente: {
        text: 'Seu filho(a) está presente',
        color: '#7bD164',
        functionCallback: () => {
            navigation.navigate('PresenteStatus', {
                data: new Date().toLocaleDateString(),
                nome: userInfo?.filho?.nome?.split(' ')[0]
            });
        }
    },
    ausente: {
        text: 'Seu filho(a) está ausente',
        color: '#F08638',
        functionCallback: () => {
            navigation.navigate('AusenteStatus', {
                data: new Date().toLocaleDateString(),
                nome: userInfo?.filho?.nome?.split(' ')[0]
            });
        }
    },
    'aguarde-chamada': {
        text: 'Aguarde a chamada terminar',
        color: '#EEC72E',
        functionCallback: () => {
            navigation.navigate('AguardeStatus');
        }
    },
    aguarde: {
        text: 'Aguarde o horário da aula',
        color: '#96948E',
        functionCallback: () => {}
    }
});

const HistoricoPage = () => {
    const navigation = useNavigation<any>();
    const { userInfo }: any = useContext(InfoContext);
    const [selectedDay, setSelectedDay] = useState<string>('');
    const [days, setDays] = useState([]);
    const [aulasHoje, setAulasHoje] = useState('');

    React.useEffect(() => {
        getClassDate().then((response) => {
            const responseConverted: any = convertDynamoDBToJson(
                response,
                'Items'
            );
            setDays(responseConverted);
            const today = doesTodayHaveClasses(responseConverted);
            handleClassesToday(today, setAulasHoje, userInfo);
        });
    }, []);

    const handleFilter = (day: string) => {
        if (day === selectedDay) {
            setSelectedDay('');
            return;
        }
        setSelectedDay(day);
    };

    const handleClassesToday = (
        today: any,
        setAulasHoje: any,
        userInfo: any
    ) => {
        if (!!today) {
            if (
                today.horario.split(':')[0] > new Date().getHours() ||
                (today.horario.split(':')[0] == new Date().getHours() &&
                    today.horario.split(':')[1] > new Date().getMinutes())
            ) {
                setAulasHoje('aguarde');
            } else {
                const jaPassou = userInfo?.historico?.find((item: any) => {
                    const dataHoje = item.data.split('/');
                    return (
                        dataHoje[0] == new Date().getDate() &&
                        dataHoje[1] == new Date().getMonth() + 1 &&
                        dataHoje[2] == new Date().getFullYear()
                    );
                });
                if (jaPassou) {
                    jaPassou.presente
                        ? setAulasHoje('presente')
                        : setAulasHoje('ausente');
                } else {
                    setAulasHoje('aguarde-chamada');
                }
            }
        } else {
            setAulasHoje('aguarde');
        }
    };

    const handleNavigationCard = (item) => {
        item.presente
            ? navigation.navigate('PresenteStatus', {
                  data: item.data,
                  nome: userInfo?.filho?.nome?.split(' ')[0]
              })
            : navigation.navigate('AusenteStatus', {
                  data: item.data,
                  nome: userInfo?.filho?.nome?.split(' ')[0]
              });
    };

    return (
        <Container>
            {aulasHoje != '' && (
                <DinamicHeader
                    data={{
                        ...mapStateAulasHoje(navigation, userInfo)[aulasHoje]
                    }}
                />
            )}

            <RowFilter>
                {days.map((item) => {
                    return (
                        <FilterButton
                            key={item['lista-dias-aulas']}
                            active={selectedDay === item['lista-dias-aulas']}
                            activeOpacity={0.5}
                            onPress={() =>
                                handleFilter(item['lista-dias-aulas'])
                            }
                        >
                            <Text>{item['lista-dias-aulas']}</Text>
                        </FilterButton>
                    );
                })}
            </RowFilter>
            {userInfo?.historico?.some((item: any) =>
                selectedDay === '' ? true : item.dia === selectedDay
            ) ? (
                <ListContainer
                    data={userInfo.historico.filter((item: any) =>
                        selectedDay === '' ? item : item.dia === selectedDay
                    )}
                    renderItem={({ item }) => (
                        <ListItem
                            present={item.presente}
                            onPress={() => {
                                handleNavigationCard(item);
                            }}
                        >
                            <ListItemText>
                                {item.dia} - {item.data} - {item.hora} -{' '}
                                {item.presente ? 'Presente' : 'Ausente'}
                            </ListItemText>
                        </ListItem>
                    )}
                    keyExtractor={(item) => item.id + item.data}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 10 }}
                />
            ) : (
                <RowFilter>
                    <Text>Não há dados nesse dia ainda</Text>
                </RowFilter>
            )}
        </Container>
    );
};

export default HistoricoPage;
