import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
  faFileMedicalAlt,
  faMapMarkerAlt,
  faEye,
  faFileSignature,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Card } from 'native-base';

export default function ExamItem(props) {
  return (
    <>
      <Card>
        <View style={styles.card}>
          <View style={styles.content}>
            <View style={styles.header}>
              <FontAwesomeIcon
                size={20}
                icon={faFileSignature}
                color="#E64D57"
              />
              <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.place}>
              <FontAwesomeIcon
                size={20}
                icon={faMapMarkerAlt}
                color="#5067FF"
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
              size={90}
              icon={faFileMedicalAlt}
              color={'rgba(207, 207, 207, 0.8)'}
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
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  content: {
    width: '70%',
    justifyContent: 'center',
  },
  icon: {
    height: '100%',
    width: '20%',
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
