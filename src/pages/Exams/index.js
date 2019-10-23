import React from 'react';
import { Image, View, Text, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={this.state.avatarSource}
          style={{ width: 200, height: 200, margin: 10, padding: 10 }}
        />
        <Button title="Selecione o exame" onPress={this.choosePhoto} />
        <Text style>{this.state.text}</Text>
      </View>
    );
  }
}
