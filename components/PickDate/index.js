import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';


const PickDate = ()=> {

    let now = new Date();

    const [value, setValue] = useState('11');
    const [date, setDate] = useState(`${now.getFullYear()}-${value}-01`);
    const [months, setMonths] = useState([
        { label: 'Enero', value: '01' },
        { label: 'Febrero', value: '02' },
        { label: 'Marzo', value: '03' },
        { label: 'Abril', value: '04' },
        { label: 'Mayo', value: '05' },
        { label: 'Junio', value: '06' },
        { label: 'Julio', value: '07' },
        { label: 'Agosto', value: '08' },
        { label: 'Setiembre', value: '09' },
        { label: 'Octubre', value: '10' },
        { label: 'Noviembre', value: '11' },
        { label: 'Diciembre', value: '12' },
    ]);
    const [placeholder, setPlaceholder] = useState({
        label: value,
        value: null,
        color: '#9EA0A4',
    });
    const markedDatesArray = [
        {
          date: moment(),
          lines: [
            {
              key: 0,
              color: 'red',
              selectedColor: 'black',
            },
          ],
        }
      ];

    return (
        <>
            <RNPickerSelect
                placeholder={placeholder}
                onValueChange={ (value) => {
                                   setValue(value);
                                   setDate(`01-${value}-${now.getFullYear()}`);
                                }
                              }
                items={months} 
                value={value}
            />
            <CalendarStrip
                scrollable
                style={{height:80}}
                calendarColor={'white'}
                calendarHeaderStyle={{color: 'black'}}
                dateNumberStyle={{color: 'black'}}
                dateNameStyle={{color: 'black'}}
                iconContainer={{flex: 0.1}}
                markedDates={markedDatesArray}
            />
            {/* <Calendar
                current={'2020-05-12'}
                // markedDates={{
                //     date: {selected: true, marked: true, selectedColor: 'blue'},
                // }}
            /> */}
            {/* <Agenda
            //selected={date}
            /> */}
        </>
    )
}

export default PickDate;