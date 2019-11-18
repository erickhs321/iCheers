import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  AppRegistry,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Quiz from '../../components/quiz';
import Timeline from 'react-native-timeline-flatlist';
import { Container, Title, Header, Content, Card, Body } from 'native-base';
import FusionCharts from 'react-native-fusioncharts';
import { Avatar } from 'react-native-paper';

const dataSource = {
  chart: {
    caption: 'Informações sobre sua saúde',
    scrollheight: '10',
    numvisibleplot: '10',
    drawcrossline: '1',
    theme: 'fusion',
  },
  categories: [
    {
      category: [
        {
          label: 'Set',
        },
        {
          label: 'Out',
        },
        {
          label: 'Nov',
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'Altura',
      plottooltext: 'Altura: $dataValuem',
      data: [
        {
          value: '1.72',
        },
        {
          value: '1.72',
        },
        {
          value: '1.72',
        },
      ],
    },
    {
      seriesname: 'Peso',
      plottooltext: 'Peso: $dataValuekg',
      data: [
        {
          value: '60',
        },
        {
          value: '65',
        },
        {
          value: '70.5',
        },
      ],
    },
    {
      seriesname: 'Imc',
      renderAs: 'line',
      plottooltext: 'Imc: $dataValue',
      data: [
        {
          value: '18',
        },
        {
          value: '20',
        },
        {
          value: '22',
        },
      ],
    },
  ],
};

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Início',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomeIcon size={22} icon={faHome} color={tintColor} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = { dataSource };
    console.log(this.state);
    this.state = {
      ...this.state,
      questions: ['Como você se sente hoje?'] || [],
      quizOpen: true,
    };

    this.libraryPath = Platform.select({
      android: { uri: 'file:///android_asset/fusioncharts.html' },
    });

    this.data = [
      {
        time: '18/11/2018',
        title: 'Motivo',
        icon: require('../../assets/qsad.png'),
        description: 'Bati com meu dedinho na quina da mesa',
      },
      {
        time: '19/11/2018',
        title: 'Motivo',
        description: 'Hoje o dia foi muito agradável.',
        icon: require('../../assets/qhappy1.png'),
      },
      {
        time: '20/11/2018',
        title: 'Motivo',
        description: 'O dia foi normal',
        icon: require('../../assets/qnormal.png'),
      },
      {
        time: '21/11/2018',
        title: 'Motivo',
        description: 'Motivo não informado',

        icon: require('../../assets/qsad.png'),
      },
      {
        time: '22/11/2018',
        title: 'Motivo',
        description: 'O dia foi produtivo',
        icon: require('../../assets/qhappy.png'),
      },
    ];
  }

  toggleQuiz = () => {
    this.setState({ quizOpen: false });
  };

  render() {
    return (
      <>
        <Header androidStatusBarColor="#d13d46" style={{ height: 0 }}></Header>

        <Container
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height,
            backgroundColor: 'rgba(45,156,219, 0)',
          }}>
          {!this.state.quizOpen && (
            <Content
              style={{
                flex: 1,
                width: '95%',
                paddingTop: 20,
                marginBottom: 30,
                height: Dimensions.get('window').height,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: 'rgba(54, 55, 64, 0.05)',
                  marginBottom: 15,
                  padding: 10,
                }}>
                <View
                  style={{
                    backgroundColor: 'rgba(1, 211, 0, 0.4)',
                    width: 165,
                    height: 165,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 180,
                  }}>
                  <Avatar.Image
                    size={150}
                    source={require('../../assets/picture.png')}
                  />
                </View>
              </View>

              <Card>
                <FusionCharts
                  type="stackedcolumn2dline"
                  width={'100%'}
                  height={350}
                  dataSource={this.state.dataSource}
                  libraryPath={this.libraryPath}
                />
              </Card>
              <Card style={{ padding: 15, marginTop: 20 }}>
                <Text
                  style={{
                    color: '#363740',
                    opacity: 0.8,
                    textAlign: 'center',
                    fontSize: 17,
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  Informações sobre o seu humor
                </Text>
                <Timeline
                  columnFormat="two-column"
                  data={this.data}
                  circleSize={30}
                  circleColor="#fff"
                  lineColor="#00b386"
                  timeContainerStyle={{ minWidth: 52, marginTop: 0 }}
                  timeStyle={{
                    textAlign: 'center',
                    backgroundColor: 'rgb(45,156,219)',
                    fontSize: 12.5,
                    color: 'white',
                    padding: 7,
                    borderRadius: 13,
                  }}
                  descriptionStyle={{
                    color: '#363740',
                    backgroundColor: '#e3e4e6',
                    padding: 10,
                    borderRadius: 10,
                  }}
                  innerCircle={'icon'}
                />
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
  texto: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
  },
  alinhamento: {
    alignItems: 'center',
  },
});
