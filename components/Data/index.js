import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const Data = (username, mail, cell, date, sex) => {
    return (
        <ScrollView>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>User Name</Text>
              <Text>{username}</Text>
            </View>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>Email Id</Text>
              <Text>{mail}</Text>
            </View>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>Mobile Number</Text>
              <Text>{cell}</Text>
            </View>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>Date of Birth</Text>
              <Text>{date}</Text>
            </View>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>Sex</Text>
              <Text>{sex}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btnSave} onPress={handleShow}>
                <Text style={styles.btnTextSave}>Regresar</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardProfileContainer: {
      flex: 1,
      marginHorizontal: '4%',
      marginBottom: '5%',
      backgroundColor: '#FFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    labelCard: {
      color: 'purple',
      fontWeight: "bold",
      fontSize: 14,
      marginBottom: 5
    },
    btnTextSave: {
      textAlign: 'center',
      color: '#FFF'
    },
    btnSave: {
      backgroundColor: 'purple',
      padding: 10,
      borderRadius: 25,
      marginTop: 10
    },
    sectionData: {
      marginVertical: 20
    }
  });

export default Data;