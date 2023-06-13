import { MarkedDates } from 'react-native-calendars/src/types';

export const returnHourOfClasses = (date: Date, listOfDays: any[]): string => {
    const today = date.getDay();
    console.log('today', today);
    const todayName = daysNumberToNameMap[today];
    console.log('todayName', todayName);
    const todayClasses = listOfDays.find(
        (c) => c['lista-dias-aulas'] == todayName
    );
    console.log('todayClasses', todayClasses);
    return todayClasses?.horario;
};

export const doesTodayHaveClasses = (listOfDays: any[]) => {
    const today = new Date().getDay();
    return listOfDays.find(
        (c) => c['lista-dias-aulas'] === daysNumberToNameMap[today]
    );
};

export const parseDate = (input) => {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
};

export const daysNumberToNameMap = {
    0: 'domingo',
    1: 'segunda',
    2: 'terça',
    3: 'quarta',
    4: 'quinta',
    5: 'sexta',
    6: 'sábado'
};

// get the relative date of today and list the dates (YYYY-MM-DD) of the next 7 days based on the list of weekdays received
export const getNextSevenDays = (listOfDays: any[]): MarkedDates => {
    const today = new Date();
    const todayDay = today.getDay();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const nextSevenDays: any[] = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date(todayYear, todayMonth, todayDate + i);
        const day = date.getDay();
        const dayName = daysNumberToNameMap[day];
        const dayInList = listOfDays.find(
            (c) => c['lista-dias-aulas'] === dayName
        );
        if (dayInList) {
            nextSevenDays.push(date.toISOString().split('T')[0]);
        }
    }

    return nextSevenDays.reduce(
        (a, v) => ({
            ...a,
            [v]: {
                selected: true,
                marked: true,
                selectedColor: 'green'
            }
        }),
        {}
    );
};
