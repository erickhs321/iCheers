import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Register extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Register',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={styles.title}>iCheers</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#363740"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#363740"
        />

        <TextInput
          style={styles.input}
          placeholder="Endereço"
          placeholderTextColor="#363740"
        />

        <TextInput
          style={styles.input}
          placeholder="Altura"
          placeholderTextColor="#363740"
        />

        <TextInput
          style={styles.input}
          placeholder="Peso"
          placeholderTextColor="#363740"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 40,
    width: '95%',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#363740',
    marginLeft: 16,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  input: {
    width: '100%',
    borderBottomColor: '#363740',
    borderBottomWidth: 1.1,
    paddingLeft: 0,
    fontSize: 14,
    paddingBottom: 10.5,
    marginBottom: 20,
  },

  loginButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25.5,
  },

  loginButton: {
    width: '40%',
    height: 34,
    fontSize: 13,
    backgroundColor: '#363740',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 13,
    color: '#fff',
    letterSpacing: 0.4,
  },

  textOrLoginWith: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: '#C2C1C1',
    fontWeight: '500',
    marginLeft: 15,
    marginRight: 15,
  },

  facebookButton: {
    marginLeft: 12,
    marginRight: 12,
  },

  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 38,
  },

  forgotPasswordText: {
    color: '#363740',
    fontSize: 10,
    letterSpacing: 0.4,
  },

  registerButton: {
    width: '100%',
    height: 34,
    backgroundColor: '#E64D57',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
