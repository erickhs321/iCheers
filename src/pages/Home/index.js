import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Quiz from '../../components/quiz';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Image, StatusBar, Dimensions } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
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
      questions: ['Como você se sente hoje?'] || [],
      quizOpen: true,
    };

    this.data = [
      {
        time: '18/11/2018',
        title: 'Archery Training',
        lineColor: '#009688',
        icon: require('../../assets/qsad.png'),
        imageUrl:
          'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
      },
      {
        time: '19/11/2018',
        title: 'Play Badminton',
        description:
          'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
        icon: require('../../assets/qsad.png'),
        imageUrl:
          'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg',
      },
      {
        time: '20/11/2018',
        title: 'Lunch',
        icon: require('../../assets/qsad.png'),
      },
      {
        time: '21/11/2018',
        title: 'Watch Soccer',
        description:
          'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor: '#009688',
        icon: require('../../assets/qsad.png'),
        imageUrl:
          'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg',
      },
      {
        time: '22/11/2018',
        title: 'Go to Fitness center',
        description: 'Look out for the Best Gym & Fitness Centers around me :)',
        icon: require('../../assets/qsad.png'),
        imageUrl:
          'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg',
      },
    ];
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
            alignItems: 'center',
            height: Dimensions.get('window').height,
          }}>
          {!this.state.quizOpen && (
            <Content style={{ width: '95%' }}>
              <Card>
                <Timeline
                  columnFormat="two-column"
                  data={this.data}
                  circleSize={20}
                  circleColor="rgba(0,0,0,0)"
                  lineColor="rgb(45,156,219)"
                  timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                  timeStyle={{
                    textAlign: 'center',
                    backgroundColor: '#ff9797',
                    color: 'white',
                    padding: 5,
                    borderRadius: 13,
                  }}
                  descriptionStyle={{ color: 'gray' }}
                  options={{
                    style: { paddingTop: 5 },
                  }}
                  innerCircle={'icon'}
                />
              </Card>
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
