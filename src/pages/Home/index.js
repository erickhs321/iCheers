import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, image, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Início',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={22} icon={faHome} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
          <View style={styles.box}>
            <Text style={styles.text1}> Pergunta </Text>
            <Text style={styles.text2}>Texto da pergunda Desejada, qualquer Pergunta?</Text>
            <View style={styles.icons}>
            <Image style={styles.iconsize} source={require('../../assets/qsad.png')}></Image>
            <Image style={styles.iconsize} source={require('../../assets/qsad1.png')}></Image>
            <Image style={styles.iconsize} source={require('../../assets/qnormal.png')}></Image>
            <Image style={styles.iconsize} source={require('../../assets/qhappy.png')}></Image>
            <Image style={styles.iconsize} source={require('../../assets/qhappy1.png')}></Image>
            </View>
            <TouchableOpacity style={styles.proxima}>
              <Text style={styles.text3}> Pular </Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 280,
    backgroundColor: '#363740',
    alignItems: 'center',
    borderRadius: 5,
  },
  text1: {
    padding: 10,
    fontFamily: 'Muli',
    fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 19,
    textAlign: 'center',
    letterSpacing: 0.3,
    color: '#E64D57',
  },
  text2: {
    padding: 15,
    fontFamily: 'Muli',
    fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: 0.3,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 4, height: 4},
  },
  text3: {
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: 0.3,
    color: '#ffff',
  },
  proxima: {
    backgroundColor: '#E64D57',
    width: 80,
    height: 25,
    borderRadius: 40,
  },
  iconsize: {
    width: 40,
    height: 40,
    justifyContent: 'space-between',
    marginLeft: 13,

  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 35,
  }
})
