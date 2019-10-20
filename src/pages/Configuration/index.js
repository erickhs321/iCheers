import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Selecionar foto do exame',
  takePhotoButtonTitle: 'Tirar foto',
  chooseFromLibraryButtonTitle: 'Escolher foto da galeria',
};

export default class Configuration extends React.Component {
  state = {
    email: 'erickhenrique321@gmail.com',
    password: '123456',
    height: '',
    weight: '',
    dateOfBirth: '',
    bloodType: 'O+',
  };

  static navigationOptions = {
    tabBarLabel: 'Configuração',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faUserCog} color={tintColor} />
    ),
  };

  logout = () => {
    this.props.navigation.navigate('Login');
  };

  choosePhoto = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        let source = { uri: response.uri };

        this.setState({
          avatarSource: source,
          pic: response.data,
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.avatarSource}
          style={{ width: 92, height: 94, borderRadius: 100 }}
        />
        <TouchableOpacity onPress={this.choosePhoto}>
          <Text>Alterar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Email</Text>
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          style={styles.input}
        />
        <Text style={styles.title}>Senha</Text>
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          style={styles.input}
          secureTextEntry={true}
        />
        <Text style={styles.title}>Altura</Text>
        <TextInput
          value={this.state.height}
          onChangeText={height => this.setState({ height })}
          style={styles.input}
        />
        <Text style={styles.title}>Peso(kg)</Text>
        <TextInput
          value={this.state.weight}
          onChangeText={weight => this.setState({ weight })}
          style={styles.input}
        />
        <Text style={styles.title}>Data de Nascimento</Text>
        <TextInput
          value={this.state.dateOfBirth}
          onChangeText={dateOfBirth => this.setState({ dateOfBirth })}
          style={styles.input}
        />
        <Text style={styles.title}>Tipo Sanguíneo</Text>
        <TextInput
          value={this.state.bloodType}
          onChangeText={bloodType => this.setState({ bloodType })}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 40,
    width: '100%',
  },
  title: {
    alignSelf: 'flex-start',
    marginBottom: -15,
    color: 'rgba(51, 51, 51, 0.7)',
    fontSize: 12,
  },
  input: {
    width: '100%',
    borderBottomColor: '#363740',
    borderBottomWidth: 1.1,
    paddingLeft: 0,
    fontSize: 14,
    paddingBottom: 0,
    marginBottom: 20,
  },
});
