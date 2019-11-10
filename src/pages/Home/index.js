import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Quiz from '../../components/quiz';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Image, StatusBar } from 'react-native';
import { Container, Title, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

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
    };
  }

  render() {
    const data = [50, 40, 40, 55, 43, 54, 60, 67, 45, 53, 53, 24, 50, 40, 50]
    return (
      <>
        <StatusBar backgroundColor={'red'} />
        <Container style={{ flex: 1, justifyContent: 'center', marginBottom: 200 }}>
          <Header style={{ backgroundColor: '#E64D57' }}>
            <Body style={{ alignItems: 'center' }}>
              <Title>Início</Title>
            </Body>
          </Header>

          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: 'Image URL' }} />
                  <Body>

                  </Body>
                </Left>
              </CardItem>
              <AreaChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 100, bottom: 20 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(230, 77, 87, 0.8)' }}
              >
                <Grid />
              </AreaChart>
              <View style={styles.alinhamento}>
                <Text style={styles.texto}>Variação de humor durante sua semana</Text>
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
          <Quiz questions={this.state.questions} />
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
  }
});
