import React, { Component,useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Select = () => {
    const [value, setValue] = useState('11');
    const [items, setItems] = useState([
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
    
    let controller;
    return (
        <>
            <RNPickerSelect
                placeholder={placeholder}
                onValueChange={(value) => setValue(value)}
                items={items} 
                value={value}
            />
        </>
    )
}

export default Select;