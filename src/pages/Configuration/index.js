import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

export default class Configuration extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Configuração',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faUserCog} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Configuration</Text>
      </View>
    );
  }
}
