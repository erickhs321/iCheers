import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faFileMedicalAlt,
  faFilter,
  faPlus,
  faEye,
  Button,
} from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-picker';
import Ocr from 'react-native-tesseract-ocr';
import { DataTable } from 'react-native-paper';
import { Container, Header, Icon, Fab } from 'native-base';

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
      exams: [
        {
          id: '1',
          name: 'Exame toxicológico',
          place: 'Laboratório São Marcos',
          date: '25/05/2010',
        },
        {
          id: '2',
          name: 'Exame de sangue',
          place: 'Laboratório São Marcos',
          date: '25/05/2015',
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.filterButton}>
              <FontAwesomeIcon
                size={12}
                icon={faFilter}
                color={'#E64D57'}
                style={styles.iconMargin}
              />
              <Text style={styles.filterButton}> Filtrar busca      </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.vaccineCardButton}>
              <FontAwesomeIcon
                size={13}
                icon={faEye}
                color={'#252733'}
                style={styles.iconMargin}
              />
              <Text style={styles.vaccineCardButton}> Ver cartão de vacina</Text>
            </TouchableOpacity>
          </View>
          <DataTable style={styles.table}>
            <DataTable.Header style={styles.borderBottomRow}>
              <DataTable.Title>
                <Text style={styles.titleStyle}>Nome</Text>
              </DataTable.Title>
              <DataTable.Title style={{ flex: 0.7 }}>
                <Text style={styles.titleStyle}>Local</Text>
              </DataTable.Title>
              <DataTable.Title style={{ flex: 0.45 }}>
                <Text style={styles.titleStyle}>Data</Text>
              </DataTable.Title>
            </DataTable.Header>

            {this.state.exams.map(exam => {
              return (
                <DataTable.Row style={styles.borderBottomRow} key={exam.id}>
                  <DataTable.Cell>
                    <Text style={styles.tableTextSize}>{exam.name}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={styles.tableTextSize}>{exam.place}</Text>
                  </DataTable.Cell>

                  <Text style={styles.tableTextSize}>
                    {exam.date}
                    {'    '}
                  </Text>

                  <Text style={styles.tableTextSize}>
                    <TouchableOpacity style={styles.viewButton}>
                      <FontAwesomeIcon size={14} icon={faEye} color={'#fff'} />
                    </TouchableOpacity>
                  </Text>
                </DataTable.Row>
              );
            })}
          </DataTable>

          <Image
            source={this.state.avatarSource}
            style={{ width: 200, height: 200, margin: 10, padding: 10 }}
          />
          <Text style>{this.state.text}</Text>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={this.choosePhoto}
              style={styles.registerExamButton}>
              <FontAwesomeIcon
                size={40}
                icon={faPlus}
                color={'white'}
                style={styles.iconMargin}
              />
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 31,
    alignItems: 'center',
  },
  table: {
    width: '97%',
  },
  filterButton: {
    flexDirection: 'row',
    color: '#E64D57',
    fontSize: 15,
    fontWeight: '500',
  },
  registerExamButton: {
    flexDirection: 'row',
    color: '#01D300',
    fontSize: 15,
    alignItems:'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#01D300',
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
