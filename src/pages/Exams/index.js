import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faFileMedicalAlt,
  faPlus,
  faSyringe,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-picker';
import Ocr from 'react-native-tesseract-ocr';
import { Body, Header, Title, Fab, Icon, Button } from 'native-base';
import { Searchbar } from 'react-native-paper';
import ExamItem from '../../components/examItem';

const options = {
  title: 'Selecionar foto do exame',
  takePhotoButtonTitle: 'Tirar foto',
  chooseFromLibraryButtonTitle: 'Escolher foto da galeria',
};

const tessOptions = {
  whitelist: null,
  blacklist: '!"#$%&/()={}[]+*-_:;<>',
};

export default class Exams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fabActive: false,
      query: '',
      avatarSource: null,
      text: '',
      exams: [
        {
          id: '1',
          name: 'Exame toxicológico',
          place: 'Laboratório São Marcos',
          date: '25/05/2019',
        },
        {
          id: '2',
          name: 'Exame de sangue',
          place: 'Laboratório São Marcos',
          date: '26/07/2018',
        },
      ],
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
      <>
        <Header
          androidStatusBarColor="#d13d46"
          style={{ backgroundColor: '#E64D57' }}>
          <Body style={{ alignItems: 'center' }}>
            <Title>Exames</Title>
          </Body>
        </Header>
        <Searchbar
          placeholder="Digite o nome do exame"
          onChangeText={query => {
            this.setState({ ...this.state, query });
          }}
          value={this.state.query}
        />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.examsList}>
              {this.state.exams
                .filter(item => item.name.includes(this.state.query))
                .map(item => (
                  <ExamItem
                    key={item.id}
                    name={item.name}
                    place={item.place}
                    date={item.date}
                  />
                ))}
            </View>

            <Image
              source={this.state.avatarSource}
              style={{ width: 200, height: 200, margin: 10, padding: 10 }}
            />
            <Text style>{this.state.text}</Text>
          </View>
        </ScrollView>
        <Fab
          active={this.state.fabActive}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.setState({ fabActive: !this.state.fabActive })}>
          <FontAwesomeIcon size={20} icon={faEllipsisV} color={'#fff'} />
          <Button
            onPress={this.choosePhoto}
            style={{ backgroundColor: '#00b386' }}>
            <FontAwesomeIcon size={20} icon={faPlus} color={'#fff'} />
          </Button>
          <Button style={{ backgroundColor: '#DD5144' }}>
            <FontAwesomeIcon size={20} icon={faSyringe} color={'#fff'} />
          </Button>
        </Fab>
        {/* <TouchableOpacity
          onPress={this.choosePhoto}
          style={styles.registerExamButton}>
          <FontAwesomeIcon
            size={20}
            icon={faPlus}
            color={'white'}
            style={styles.iconMargin}
          />
        </TouchableOpacity> */}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },

  examsList: {
    width: '100%',
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    color: '#E64D57',
    fontSize: 15,
    fontWeight: '500',
  },
  registerExamButton: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#067DFF',
  },
  vaccineCardButton: {
    flexDirection: 'row',
    color: '#252733',
    fontSize: 15,
  },
  borderBottomRow: {
    borderBottomColor: '#DFE0EB',
    borderBottomWidth: 1.5,
  },
  containerButton: {
    flexDirection: 'row',
    marginBottom: 19,
  },
  button: {
    flexDirection: 'row',
  },
  titleStyle: {
    color: '#9FA2B4',
    fontSize: 15,
  },
  viewButton: {
    backgroundColor: '#29CC97',
    width: 32.3,
    height: 15,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  tableTextSize: {
    fontSize: 12,
    marginTop: 17,
  },
  iconMargin: {
    marginRight: 2,
  },
  nameColumn: {
    flex: 2,
  },
  placeColumn: {
    flex: 2,
  },
  dateColumn: {
    flex: 1,
  },
});
