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
import { Body, Header, Title } from 'native-base';
import { removeItemAsyncStorage } from '../../services/async-storage';

const options = {
  title: 'Selecionar foto',
  takePhotoButtonTitle: 'Tirar foto',
  chooseFromLibraryButtonTitle: 'Escolher foto da galeria',
};

export default class Configuration extends React.Component {
  state = {
    email: 'erickhenrique321@gmail.com',
    password: '123456',
    height: '1.72m',
    weight: '60kg',
    dateOfBirth: '',
    bloodType: 'O+',
    diseases: ['Rubeola', 'Diabetes'],
    profiles: ['Carla', 'Maria'],
    devices: ['Lenovo k6'],
    frequency: '1',
    encryptionKey: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
    avatarSource: require('../../assets/picture.png'),
  };

  static navigationOptions = {
    tabBarLabel: 'Configuração',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faUserCog} color={tintColor} />
    ),
  };

  logout = () => {
    removeItemAsyncStorage('uid');
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
      <>
        <Header
          androidStatusBarColor="#d13d46"
          style={{ backgroundColor: '#E64D57' }}>
          <Body style={{ alignItems: 'center' }}>
            <Title>Configuração</Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={styles.container}>
            <Image source={this.state.avatarSource} style={styles.image} />
            <TouchableOpacity
              style={styles.changePhotoButton}
              onPress={this.choosePhoto}>
              <Text style={styles.textButton}>Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton} onPress={this.logout}>
              <Text style={styles.textButton}>Deslogar</Text>
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
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.listText}>- {disease}</Text>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={styles.iconMargin}
                        size={12}
                        icon={faTrashAlt}
                        color={'#E64D57'}
                      />
                    </TouchableOpacity>
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
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.listText}>- {profile}</Text>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={styles.iconMargin}
                        size={12}
                        icon={faTrashAlt}
                        color={'#E64D57'}
                      />
                    </TouchableOpacity>
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
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.listText}>- {device}</Text>
                    <TouchableOpacity>
                      <FontAwesomeIcon
                        style={styles.iconMargin}
                        size={12}
                        icon={faTrashAlt}
                        color={'#E64D57'}
                      />
                    </TouchableOpacity>
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
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 40,
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: 'grey',
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
  changePhotoButton: {
    marginTop: 10,
    backgroundColor: '#E64D57',
    width: 71,
    height: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 11,
    letterSpacing: 0.4,
    color: '#F7F7F7',
  },
  logoutButton: {
    marginTop: 2,
    backgroundColor: '#363740',
    borderRadius: 5,
    height: 24,
    width: 71,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
