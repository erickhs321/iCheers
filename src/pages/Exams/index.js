import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';

export default class Exams extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Exames',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={22} icon={faFileMedicalAlt} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Exames</Text>
      </View>
    );
  }
}
