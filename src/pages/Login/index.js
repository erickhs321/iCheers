import React from 'react';
import { auth } from '../../services/api';
import { saveItemAsyncStorage } from '../../services/async-storage';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { authWithEmailAndPassword } from '../../services/firebase';
export default class Login extends React.Component {
  static navigationOptions = () => {
    return {
      header: () => null,
    };
  };

  state = {
    email: '',
    password: '',
  };

  login = async () => {
    try {
      if (!this.state.email || !this.state.password) {
        throw 'Insira todos os dados';
      } else {
        const res = await authWithEmailAndPassword(
          this.state.email,
          this.state.password,
        );

        if (res.error) {
          if (res.error === 'Network Error') {
            throw 'Você está desconectado da internet';
          } else {
            throw 'Usuário ou senha incorretos';
          }
        } else {
          this.props.navigation.navigate('Home');
          const { uid } = res.user;
          await saveItemAsyncStorage('uid', uid);
        }
      }
    } catch (error) {
      this.setState({ ...this.state, error });
    }
  };

  register = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.error && (
          <View style={styles.errorAlert}>
            <Text style={styles.errorAlertText}>{this.state.error}</Text>
          </View>
        )}

        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={styles.title}>iCheers</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          placeholder="Login"
          placeholderTextColor="#363740"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholderTextColor="#363740"
          secureTextEntry={true}
        />

        <View style={styles.loginButtonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={this.login}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.registerButton} onPress={this.register}>
          <Text style={styles.buttonText}>Não possuo um cadastro</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorAlert: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 35,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
  },
  errorAlertText: {
    fontSize: 11.5,
    color: '#721c24',
  },
  container: {
    alignItems: 'center',
    padding: 40,
    paddingTop: 60,
    width: '100%',
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
    height: 50,
    borderBottomColor: '#363740',
    borderBottomWidth: 1.1,
    paddingLeft: 0,
    fontSize: 16,
    paddingBottom: 15,
    marginBottom: 20,
  },

  loginButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25.5,
  },

  loginButton: {
    width: '100%',
    height: 45,
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
    fontSize: 1,
    letterSpacing: 0.4,
    color: '#C2C1C1',
    fontWeight: '500',
    marginLeft: 15,
    marginRight: 15,
  },

  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 38,
  },

  forgotPasswordText: {
    color: '#363740',
    fontSize: 12,
    letterSpacing: 0.4,
  },

  registerButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#E64D57',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
