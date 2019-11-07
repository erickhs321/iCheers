import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Quiz from '../../components/quiz';
import { PieChart } from 'react-native-svg-charts';
import { Circle, G, Line } from 'react-native-svg';

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
    const data = [ 50,19,53, 85, 91 ]

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: { fill: randomColor() },
            key: `pie-${index}`,
        }))

    const Labels = ({ slices }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
        })
    }
    return (
      <View>
        <View style={{marginTop: 180}}>
          <Quiz questions={this.state.questions} />
        </View>
        <View style={{marginTop: 140, alignItems: 'center'}}>
          <Text>Gráfico de Humor</Text>
        </View>
        <View>
          <PieChart
            style={ { height: 250 } }
            data={ pieData }
            innerRadius={ 40 }
            outerRadius={ 105 }
            labelRadius={ 80 }
            >
            <Labels/>
          
          </PieChart>
        </View>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 40,
    width: '95%',
  },
});
