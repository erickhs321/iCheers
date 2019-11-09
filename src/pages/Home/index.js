import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Quiz from '../../components/quiz';
import Pie from 'react-native-pie';

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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Quiz questions={this.state.questions} />
        </View>

        <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
        <Text style={{ padding: 15 }}>Gráfico de Humor</Text>
          <Pie
            radius={100}
            innerRadius={ 20 }
            series={[7,13,20, 40 , 20]}
            colors={['#CD0000', '#FF4500','#FFD700' , '#9AFF9A', '#00CD00'] }
          />
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
