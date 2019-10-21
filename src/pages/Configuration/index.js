import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Picker,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUserCog,
  faPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
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
    diseases: ['Rubeola', 'Diabetes'],
    profiles: ['Carla', 'Maria'],
    devices: ['Lenovo k6'],
    frequency: '',
    encryptionKey: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
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
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={this.state.avatarSource}
            style={{ width: 92, height: 94, borderRadius: 100, backgroundColor: 'grey' }}
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
          <View style={styles.title}>
            <Text style={styles.title}>Doenças</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                style={styles.iconMargin}
                size={18}
                icon={faPlus}
                color={'#01D300'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            {this.state.diseases.map((disease, index) => {
              return (
                <View style={styles.listItem}>
                  <Text key={index} style={styles.listText}>
                    - {disease}
                  </Text>
                  <FontAwesomeIcon
                    style={styles.iconMargin}
                    size={12}
                    icon={faTrashAlt}
                    color={'#E64D57'}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.title}>
            <Text style={styles.title}>Meus Perfis</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                style={styles.iconMargin}
                size={18}
                icon={faPlus}
                color={'#01D300'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            {this.state.profiles.map((profile, index) => {
              return (
                <View style={styles.listItem}>
                  <Text key={index} style={styles.listText}>
                    - {profile}
                  </Text>
                  <FontAwesomeIcon
                    style={styles.iconMargin}
                    size={12}
                    icon={faTrashAlt}
                    color={'#E64D57'}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.title}>
            <Text style={styles.title}>Dispositivos</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                style={styles.iconMargin}
                size={18}
                icon={faPlus}
                color={'#01D300'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            {this.state.devices.map((device, index) => {
              return (
                <View style={styles.listItem}>
                  <Text key={index} style={styles.listText}>
                    - {device}
                  </Text>
                  <FontAwesomeIcon
                    style={styles.iconMargin}
                    size={12}
                    icon={faTrashAlt}
                    color={'#E64D57'}
                  />
                </View>
              );
            })}
          </View>
          <Text style={styles.title}>Frequência</Text>
          <Picker
            selectedValue={this.state.frequency}
            style={styles.select}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ frequency: itemValue })
            }>
            <Picker.Item label="Todo Dia" value="everyday" />
            <Picker.Item label="Uma vez por semana" value="onceAWeek" />
          </Picker>
          <Text style={styles.title}>Chave de criptografia</Text>
          <TextInput
            value={this.state.encryptionKey}
            onChangeText={encryptionKey => this.setState({ encryptionKey })}
            style={styles.input}
          />
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.textButton}>Salvar Configurações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderBottomColor: '#363740',
    borderBottomWidth: 1.1,
    paddingLeft: 0,
    fontSize: 12,
    paddingBottom: 0,
    marginBottom: 20,
  },
  iconMargin: {
    marginLeft: 4,
  },
  list: {
    marginTop: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    fontSize: 12,
  },
  select: {
    fontSize: 10,
    width: '100%',
    marginLeft: -15,
  },
  submitButton: {
    backgroundColor: '#363740',
    borderRadius: 16,
    height: 34,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 13,
    letterSpacing: 0.4,
    color: '#F7F7F7',
  },
});
