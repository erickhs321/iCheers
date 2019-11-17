import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Card } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      faces: [
        { id: 1, icon: require('../assets/qsad.png'), selected: false },
        { id: 2, icon: require('../assets/qsad1.png'), selected: false },
        { id: 3, icon: require('../assets/qnormal.png'), selected: false },
        { id: 4, icon: require('../assets/qhappy.png'), selected: false },
        { id: 5, icon: require('../assets/qhappy1.png'), selected: false },
      ],
    };
  }

  select = id => {
    this.unSelect();
    const face = this.state.faces.find(face => face.id === id);
    face.selected = true;
    this.forceUpdate();
  };

  unSelect = () => {
    const face = this.state.faces.find(face => face.selected);
    if (face) {
      face.selected = false;
    }
  };

  haveAnySelected = () => {
    const selected = this.state.faces.find(face => face.selected);
    return selected ? true : false;
  };

  end() {
    this.props.toggleQuiz();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card style={styles.box}>
          <Text style={styles.text2}>
            {this.props.questions[this.state.currentQuestion - 1]}
          </Text>
          <View style={styles.icons}>
            {this.state.faces.map(({ selected, icon, id }) => {
              return (
                <View
                  key={id}
                  style={{
                    height: 60,
                  }}>
                  <FontAwesomeIcon
                    style={{ position: 'relative', left: 30, top: 0 }}
                    size={14}
                    icon={faCheckCircle}
                    color={'#fff'}
                    opacity={selected ? 1 : 0}
                  />
                  <TouchableOpacity onPress={() => this.select(id)}>
                    <Image
                      style={[
                        styles.iconsize,
                        {
                          opacity:
                            selected || !this.haveAnySelected() ? 1 : 0.2,
                        },
                      ]}
                      source={icon}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: -5,
            }}>
            <TextInput
              style={styles.input}
              placeholder="Algum motivo específico?"
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              placeholderTextColor="#fff"
              multiline={true}
            />
          </View>

          <View>
            <TouchableOpacity
              disabled={!this.haveAnySelected()}
              onPress={() => this.end()}
              style={[
                styles.reply,
                { opacity: !this.haveAnySelected() ? 0.5 : 1 },
              ]}>
              <Text style={styles.text3}>Responder</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 330,
    height: 282,
    backgroundColor: '#363740',
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: 5,
  },
  containerButton: {
    width: '120%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    width: '85%',
    height: 80,
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1.1,
    fontSize: 13,
    marginBottom: 26,
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
    fontSize: 13,
    color: '#ffff',
  },
  reply: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b386',
    width: 105,
    height: 30,
    borderRadius: 10,
  },
  iconsize: {
    width: 40,
    height: 40,
  },
  icons: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 0,
  },
});
