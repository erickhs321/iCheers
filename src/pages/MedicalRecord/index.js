import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { Body, Header, Title, Fab, Icon, Button } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';

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
    displayQrCodeReader: true,
    focusedScreen: true,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('willFocus', () =>
      this.setState({ focusedScreen: true, readQrCode: false }),
    );
    navigation.addListener('willBlur', () =>
      this.setState({
        focusedScreen: false,
        displayQrCodeReader: false,
      }),
    );
  }

  static navigationOptions = {
    tabBarLabel: 'Prontuário',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={20} icon={faNotesMedical} color={tintColor} />
    ),
  };

  onRead = e => {
    this.setState({
      id: e.data,
      readQrCode: true,
    });
  };

  readAgain = () => {
    this.setState({ readQrCode: false });
  };

  render() {
    return (
      <>
        {this.state.focusedScreen && this.state.readQrCode && (
          <View>
            <Header
              androidStatusBarColor="#d13d46"
              style={{ backgroundColor: '#E64D57' }}>
              <Body style={{ alignItems: 'center' }}>
                <Title>Prontuário</Title>
              </Body>
            </Header>
            <Text>{this.state.id}</Text>
          </View>
        )}
        {this.state.focusedScreen && !this.state.readQrCode && (
          <QRCodeScanner
            cameraStyle={styles.cameraContainer}
            onRead={this.onRead}
            showMarker={true}
            checkAndroid6Permissions={true}
          />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 0,
    height: Dimensions.get('window').height,
  },
  scanQrCodeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 40,
    width: '100%',
  },
  cancelButton: {
    borderRadius: 5,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
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
