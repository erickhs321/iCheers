import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
  faFileMedicalAlt,
  faMapMarkerAlt,
  faEye,
  faFileSignature,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Card } from 'native-base';

export default function ExamItem(props) {
  return (
    <>
      <Card>
        <View style={styles.card}>
          <View style={styles.content}>
            <View style={styles.dateContainer}>
              <FontAwesomeIcon size={15} icon={faCalendarDay} color="#495057" />
              <Text style={styles.dateValue}>{props.date}</Text>
            </View>
            <View style={styles.header}>
              <FontAwesomeIcon
                size={20}
                icon={faFileSignature}
                color="#495057"
              />
              <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.place}>
              <FontAwesomeIcon
                size={20}
                icon={faMapMarkerAlt}
                color="#495057"
              />
              <Text style={styles.placeName}>{props.place}</Text>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.button}>
                <FontAwesomeIcon size={18} icon={faEye} color={'#fff'} />
                <Text style={styles.buttonText}>Visualizar exame</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.icon}>
            <FontAwesomeIcon
              size={80}
              icon={faFileMedicalAlt}
              color={'rgba(173, 181, 189, 0.5)'}
            />
          </View>
        </View>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 20,
    paddingLeft: 15,
    paddingBottom: 16,
    flexDirection: 'row',
  },
  content: {
    width: '70%',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '25%',
  },
  dateContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: -10,
    right: -90,
  },
  dateValue: {
    fontSize: 11,
    marginLeft: 5,
  },
  place: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeName: {
    fontSize: 13,
    letterSpacing: 0.2,
    color: 'black',
    marginLeft: 10,
  },
  containerButton: {
    marginTop: 10,
  },
  button: {
    marginLeft: 3,
    flexDirection: 'row',
    height: 30,
    width: 145,
    color: 'white',
    backgroundColor: '#00b386',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.2,
    color: 'black',
    marginLeft: 10,
  },
});
