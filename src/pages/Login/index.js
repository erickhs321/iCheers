import React from 'react';
import { Loggin } from '../../services/api';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class Login extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Login',
  };

  state = {
    user: '',
    password: '',
  };

  login = async () => {
    Loggin(this.state.user, this.state.password).then(
      this.props.navigation.navigate('Home')
    ).catch(console.log(error))
  };

  register = () => {
    this.props.navigation.navigate('Register');
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
          onChangeText={user => this.setState({ user })}
          value={this.state.user}
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
          <Text style={styles.textOrLoginWith}> ou entrar com:</Text>
          <TouchableOpacity onPress={this.login}>
            <Image source={require('../../assets/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.login} style={styles.facebookButton}>
            <Image source={require('../../assets/facebook.png')} />
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
