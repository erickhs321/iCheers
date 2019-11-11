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
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faPlus,
  faTrashAlt,
  faNotesMedical,
} from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-picker';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { white } from 'ansi-colors';

const options = {
  title: 'Selecionar foto',
  takePhotoButtonTitle: 'Tirar foto',
  chooseFromLibraryButtonTitle: 'Escolher foto da galeria',
};

export default class MedicalRecord extends React.Component {
  state = {
    name: 'Erick Henrique',
    drink: 'Socialmente',
    cigarets: 'Não Fumante',
    psychoactive: 'N/A',
    cardiorespiratory: 'Normal',
    mobility: 'Normal',
    deficiency: 'N/A',
    height: '1.8m',
    weight: '60kg',
    dateOfBirth: '01/01/2001',
    bloodType: 'O+',
    diseases: ['Rubeola', 'Diabetes', 'Glaucoma', 'Anemia'],
    frequency: '',
    readQrCode: false,
  };

  static navigationOptions = {
    tabBarLabel: 'Prontuário',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faNotesMedical} color={tintColor} />
    ),
  };

  onSuccess = async e => {
    await this.setState({ id: e.data, readQrCode: true });
  };

  readAgain = () => {
    this.setState({ readQrCode: false });
  };

  render() {
    return (
      <>
        {!this.state.readQrCode && (
          <QRCodeScanner
            onRead={this.onSuccess}
            showMarker={true}
            cameraStyle={styles.cameraContainer}
          />
        )}
        {this.state.readQrCode && (
          <View style={styles.container}>
            <View style={styles.box}>
              <Image source={this.state.avatarSource} style={styles.image} />
              <Text style={styles.listText}>{this.state.id}</Text>
              <TouchableOpacity style={styles.lernovamente} onPress={this.readAgain}>
                <Text style={styles.text3}>Ler novamente</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* <View style={styles.container}>
          <Text style={styles.major}>Prontuário</Text>
          <Image source={this.state.avatarSource} style={styles.image} />
          <Text style={styles.title}>Nome</Text>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.input}
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
          <Text style={styles.title}>Consumo de bebidas alcoolicas</Text>
          <TextInput
            value={this.state.drink}
            onChangeText={encryptionKey => this.setState({ drink })}
            style={styles.input}
          />
          <Text style={styles.title}>Cigarros</Text>
          <TextInput
            value={this.state.cigarets}
            onChangeText={encryptionKey => this.setState({ cigarets })}
            style={styles.input}
          />
          <Text style={styles.title}>Substancias Pscicoativas</Text>
          <TextInput
            value={this.state.psychoactive}
            onChangeText={encryptionKey => this.setState({ psychoactive })}
            style={styles.input}
          />
          <Text style={styles.title}>Avaliação Cardiorespiratória</Text>
          <TextInput
            value={this.state.cardiorespiratory}
            onChangeText={encryptionKey => this.setState({ cardiorespiratory })}
            style={styles.input}
          />
          <Text style={styles.title}>Mobilidade</Text>
          <TextInput
            value={this.state.mobility}
            onChangeText={encryptionKey => this.setState({ mobility })}
            style={styles.input}
          />
          <Text style={styles.title}>Deficiência</Text>
          <TextInput
            value={this.state.deficiency}
            onChangeText={encryptionKey => this.setState({ deficiency })}
            style={styles.input}
          />
          <Text style={styles.title}>Pratica exercícios físicos</Text>
          <Picker
            selectedValue={this.state.frequency}
            style={styles.select}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ frequency: itemValue })
            }>
            <Picker.Item label="Todos os Dias" value="everyday" />
            <Picker.Item label="Uma vez por semana" value="onceAWeek" />
          </Picker>
        </View> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  cameraContainer: {
    height: Dimensions.get('window').height,
  },
  container: {
    alignItems: 'center',
    padding: 40,
    width: '100%',
  },
  box: {
    padding: 10,
    width: 300,
    height: 260,
    backgroundColor: '#363740',
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    width: 92,
    height: 94,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  major: {
    padding: 13,
    fontSize: 15,
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
    color: 'white',
    padding: 3,
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
  text3: {
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: 0.3,
    fontSize: 12,
    color: '#ffff',
  },
  lernovamente: {
    backgroundColor: '#E64D57',
    width: 130,
    height: 27,
    borderRadius: 40,
  },
});
