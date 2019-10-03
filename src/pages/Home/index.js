import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => <FontAwesomeIcon icon={faHome} />,
  };

  logout = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.logout}>
          <Text>logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
