import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => <FontAwesomeIcon icon={faHome} />,
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 50 }}>Ola</Text>
      </View>
    );
  }
}
