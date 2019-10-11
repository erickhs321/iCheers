import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Selecionar foto do exame',
  takePhotoButtonTitle: 'Tirar foto',
  chooseFromLibraryButtonTitle: 'Escolher foto da galeria',
};
export default class Exams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
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

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          pic: response.data,
        });
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Exames</Text>
        <Image
          source={this.state.avatarSource}
          style={{ width: 200, height: 200, margin: 10, padding: 10 }}
        />
        <TouchableOpacity onPress={this.choosePhoto}>
          <Text>Selecione o exame</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
