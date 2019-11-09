import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      visible: true,
    };
  }

  next() {
    this.setState({
      ...this.state,
      currentQuestion: this.state.currentQuestion + 1,
      lastPage: false,
    });
  }

  previous() {
    this.setState({
      ...this.state,
      currentQuestion: this.state.currentQuestion - 1,
    });
  }

  end() {
    this.setState({
      ...this.state,
      visible: false,
    });
  }

  render() {
    if (this.state.visible) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.box}>
            <Text style={styles.text1}>
              pergunta {this.state.currentQuestion}/
              {this.props.questions.length}
            </Text>
            <Text style={styles.text2}>
              {this.props.questions[this.state.currentQuestion - 1]}
            </Text>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Image
                  style={styles.iconsize}
                  source={require('../assets/qsad.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.iconsize}
                  source={require('../assets/qsad1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.iconsize}
                  source={require('../assets/qnormal.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.iconsize}
                  source={require('../assets/qhappy.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.iconsize}
                  source={require('../assets/qhappy1.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containerButton}>
              {this.state.currentQuestion > 1 && (
                <TouchableOpacity
                  onPress={() => this.previous()}
                  style={styles.proxima}>
                  <Text style={styles.text3}> Anterior </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                onPress={
                  this.state.currentQuestion === this.props.questions.length
                    ? () => this.end()
                    : () => this.next()
                }
                style={styles.proxima}>
                <Text style={styles.text3}>
                  {this.state.currentQuestion === this.props.questions.length
                    ? 'Finalizar'
                    : 'Próxima'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 260,
    backgroundColor: '#363740',
    alignItems: 'center',
    borderRadius: 5,
  },
  containerButton: {
    width: '120%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  text1: {
    padding: 10,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 19,
    textAlign: 'center',
    letterSpacing: 0.3,
    color: '#E64D57',
  },
  text2: {
    padding: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: 0.3,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 4, height: 4 },
  },
  text3: {
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: 0.3,
    fontSize: 12,
    color: '#ffff',
  },
  proxima: {
    backgroundColor: '#E64D57',
    width: 80,
    height: 25,
    borderRadius: 40,
  },
  iconsize: {
    width: 40,
    height: 40,
    justifyContent: 'space-between',
    marginLeft: 13,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 35,
  },
});
