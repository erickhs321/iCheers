import React from 'react';
import { Text } from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Login',
  };

  render() {
    return <Text style={{ fontSize: 50 }}>Login Page</Text>;
  }
}
