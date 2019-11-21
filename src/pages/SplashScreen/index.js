import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'native-base';

import { getChartData } from '../../services/api';
import {
  getItemAsyncStorage,
  saveItemAsyncStorage,
} from '../../services/async-storage';

export default class Login extends React.Component {
  componentDidMount() {
    this.initializer();
  }

  state = {
    user: '',
    password: '',
  };

  initializer = async () => {
    const uid = await getItemAsyncStorage('uid');

    const chartData = await getChartData();

    if (uid) {
      this.props.navigation.navigate('Home', { chartData });
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    return (
      <>
        <Header
          androidStatusBarColor="#d13d46"
          style={{ backgroundColor: '#E64D57', height: 0 }}
        />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/splash.png')} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E64D57',
    height: '100%',
    width: '100%',
  },
});
