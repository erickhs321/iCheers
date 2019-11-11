import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Quiz from '../../components/quiz';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Image, StatusBar } from 'react-native';
import {
  Container,
  Title,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Início',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={22} icon={faHome} color={tintColor} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      questions: ['Você está bem?', 'Como vai hoje?', 'Teste?'] || [],
      quizOpen: true,
    };
  }

  toggleQuiz = () => {
    this.setState({ quizOpen: false });
  };

  render() {
    const data = [50, 40, 40, 55, 43, 54, 60, 67, 45, 53, 53, 24, 50, 40, 50];
    return (
      <>
        <Header
          androidStatusBarColor="#d13d46"
          style={{ backgroundColor: '#E64D57' }}>
          <Body style={{ alignItems: 'center' }}>
            <Title>Início</Title>
          </Body>
        </Header>
        <Container
          style={{
            flex: 1,
            justifyContent: 'center',
            marginBottom: 200,
          }}>
          {!this.state.quizOpen && (
            <Content>
              <Card>
                <AreaChart
                  style={{ height: 200 }}
                  data={data}
                  contentInset={{ top: 50, bottom: 10 }}
                  curve={shape.curveNatural}
                  svg={{ fill: 'rgba(6, 125, 255, 0.8)' }}>
                  <Grid />
                </AreaChart>
                <View style={styles.alinhamento}>
                  <Text style={styles.texto}>
                    Variação de humor durante sua semana
                  </Text>
                </View>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Text>Média: 50.8</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Text>Você está: </Text>
                      <Icon active name="happy" />
                      <Text> Feliz</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>7 dias</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
          )}
          {this.state.quizOpen && (
            <Quiz
              questions={this.state.questions}
              toggleQuiz={this.toggleQuiz}
            />
          )}
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 40,
    width: '95%',
  },
  grafico: {
    marginTop: 200,
  },
  cardhumor: {
    width: 300,
    height: 260,
    backgroundColor: '#363740',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 100,
  },
  texto: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
  },
  alinhamento: {
    alignItems: 'center',
  },
});
