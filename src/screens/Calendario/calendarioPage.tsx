import * as React from 'react';
import { Calendar } from 'react-native-calendars';
import GreenButton from '../../assets/Presenca-green-button.svg';
import {
    Card,
    Titulo,
    Detalhes,
    Presenca,
    Subtitulo,
    Container,
    GreenSquare
} from './styles';
import {
    convertDynamoDBToJson,
    getClassDate
} from '../../api/classCheckServices';
import { useContext, useState } from 'react';
import {
    getNextSevenDays,
    parseDate,
    returnHourOfClasses
} from '../../utils/daysHelper';
import { InfoContext } from '../../context/context';
import { View } from 'react-native';

export default function CalendarioPage() {
    const [selectedDay, setSelectedDay] = useState<Date>(new Date());
    const [days, setDays] = useState([]);
    const { userInfo }: any = useContext(InfoContext);

    const calculatePercentageOfPresenceUsinUserInfo = (historico: any[]) => {
        const totalClasses = historico?.length;
        const totalClassesPresent = historico?.filter(
            (item) => item.presente === true
        ).length;
        const percentageOfPresence = (totalClassesPresent / totalClasses) * 100;
        return percentageOfPresence.toFixed(2);
    };

    React.useEffect(() => {
        getClassDate().then((response) => {
            const responseConverted: any = convertDynamoDBToJson(
                response,
                'Items'
            );
            setDays(responseConverted);
        });
    }, []);

    return (
        <Container>
            <Titulo>Calendário das Aulas</Titulo>
            <Card src={GreenButton} />
            <View style = {{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <GreenSquare />
            <Subtitulo>Dias que deve-se comparecer a aula</Subtitulo>
            </View>
            <Calendar
                theme={{
                    monthTextColor: 'white',
                    textMonthFontSize: 24,
                    arrowColor: '#333333',
                    calendarBackground: '#333333',
                    dayTextColor: '#B3B3B3',
                    textSectionTitleColor: '#B3B3B3',
                    textDisabledColor: '#616161'
                }}
                // Customize the appearance of the calendar
                style={{
                    backgroundColor: '#333333',
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: '100%',
                    borderRadius: 14
                }}
                // Callback that gets called when the user selects a day
                onDayPress={(day) => {
                    setSelectedDay(parseDate(day.dateString));
                }}
                // Specify the initial date yyyy-mm-dd
                initialDate={
                    new Date().getFullYear() +
                    '-' +
                    (new Date().getMonth() + 1) +
                    '-' +
                    new Date().getDate()
                }
                // Mark specific dates as marked
                markedDates={
                    !!days && days.length > 0 ? getNextSevenDays(days) : {}
                }
            />
            <Presenca>
                Porcentagem de presença:{'  '}
                {calculatePercentageOfPresenceUsinUserInfo(userInfo?.historico)}%
            </Presenca>
            <Detalhes>
                A sua aula hoje começas às {returnHourOfClasses(selectedDay, days)}h
            </Detalhes>
        </Container>
    );
}
