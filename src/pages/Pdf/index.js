import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

export default class PdfPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const name = navigation.getParam('name');
    return {
      title: name,
    };
  };

  render() {
    const { navigation } = this.props;
    const path = navigation.getParam('path');
    return <Pdf source={path} style={styles.pdf} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
