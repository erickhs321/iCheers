import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faFileMedicalAlt,
  faFilter,
  faPlus,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-picker';
import Ocr from 'react-native-tesseract-ocr';

const options = {
  title: 'Selecionar foto do exame',
  takePhotoButtonTitle: 'Tirar foto',
  chooseFromLibraryButtonTitle: 'Escolher foto da galeria',
};

const tessOptions = {
  whitelist: null,
  blacklist: null,
};

export default class Exams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      text: '',
    };
  }

  static navigationOptions = {
    tabBarLabel: 'Exames',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faFileMedicalAlt} color={tintColor} />
    ),
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
        this.extractText(response.path);
      }
    });
  };

  extractText(imgPath) {
    Ocr.recognize(imgPath, 'LANG_PORTUGUESE', tessOptions).then(res =>
      this.setState({ text: res }),
    );
    console.log(this.state.text);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon size={20} icon={faFilter} />
            <Text>Filtrar busca</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.choosePhoto} style={styles.button}>
            <FontAwesomeIcon size={20} icon={faPlus} />
            <Text>Cadastrar exame</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon size={20} icon={faEye} />
            <Text>Ver cartão de vacina</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={this.state.avatarSource}
          style={{ width: 200, height: 200, margin: 10, padding: 10 }}
        />
        <Text style>{this.state.text}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 31,
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
  },
});
