import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

export default class Configuration extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Parceiros',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faHandshake} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Parceiros</Text>
      </View>
    );
  }
}
