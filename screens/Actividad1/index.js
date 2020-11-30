import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PickDate from '../../components/PickDate';
import TimePicker from '../../components/TimePicker';

const Actividad1 = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Appointment</Text>
                </View>
                <View style={styles.date}>
                    <Text style={styles.textDate}>PICK DATE</Text>
                    <PickDate/>
                </View>
                <View style={styles.time}>
                    <Text style={styles.textTimeDate}>PICK TIME</Text>
                    <TimePicker/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: '10%',
      backgroundColor: '#BBD2E0',
    },
    box:{
      flex:1,
      padding: '5%',
      backgroundColor: 'white',
    },
    title:{
      marginTop: 60,
      marginBottom: 30,
    },
    textTitle:{
      fontWeight:'bold',
      fontSize: 35,
      marginLeft: 8,
    },
    date:{
      //flex: 1,
    },
    time:{
      marginTop: 20,
    },
    textDate:{
      fontWeight: 'bold',
      marginLeft: 8,
    },
    textTimeDate:{
      fontWeight: 'bold',
      marginLeft: 8,
      marginBottom: 20,
    }
  });

  export default Actividad1;