import React from 'react';
import { StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarDate = () => {
    return (
        <Calendar
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
                '2020-11-16': {selected: true, marked: true, selectedColor: 'blue'},
            }}
        />
    )
}

export default CalendarDate;