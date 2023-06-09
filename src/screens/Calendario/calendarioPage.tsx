import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from '../../global/container/container';
import { Calendar } from 'react-native-calendars';
import GreenButton from '../../assets/Presenca-green-button.svg';
import {
    Card,
    Titulo,
    Detalhes,
    Presenca,
    Subtitulo,
    ButtonBack
} from './styles';

const theme = {
    colors: {
        background: '#32C2B9'
    }
};

export default function CalendarioPage() {
    return (
        <ThemeProvider theme={theme}>
            <Container theme={theme}>
                <ButtonBack />
                <Titulo>Calendário das Aulas</Titulo>
                <Card src={GreenButton} />
                <Subtitulo>Dias que ele deve comparecer a aula</Subtitulo>
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
                        height: 350,
                        borderRadius: 14,
                        top: 248
                    }}
                    // Specify the current date
                    current={'2023-04-26'}
                    // Callback that gets called when the user selects a day
                    onDayPress={(day) => {
                        console.log('selected day', day);
                    }}
                    // Mark specific dates as marked
                    markedDates={{
                        '2023-04-01': {
                            selected: true,
                            marked: true,
                            selectedColor: 'green'
                        },
                        '2023-04-02': { marked: true },
                        '2023-04-03': {
                            selected: true,
                            marked: true,
                            selectedColor: 'green'
                        }
                    }}
                />
                <Presenca>Porcentagem de presença: 75,3%</Presenca>
                <Detalhes>
                    O aluno está dentro da porcentagem esperada de presença!
                    Tudo certo por aqui
                </Detalhes>
            </Container>
        </ThemeProvider>
    );
}
