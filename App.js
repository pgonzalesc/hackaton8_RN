import React from 'react';
import { StyleSheet } from 'react-native';
import CalendarDate from './components/CalendarDate';
import Select from './components/Select';
import TimePicker from './components/TimePicker';

const App = () => {
  return (
    <>
      <Select/>
      <CalendarDate/>
      <TimePicker/>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
