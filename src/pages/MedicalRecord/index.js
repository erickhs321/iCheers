import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';

export default class MedicalRecord extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Prontuário',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={22} icon={faNotesMedical} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Prontuário</Text>
      </View>
    );
  }
}
