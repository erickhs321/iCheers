import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import SplashScreen from './SplashScreen';
import Exams from './Exams';
import MedicalRecord from './MedicalRecord';
import Configuration from './Configuration';
import Pdf from './Pdf';
import Partners from './Partners';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const stackNavigation = createStackNavigator({
  Login,
  Register,
});

const viewPdf = createStackNavigator({
  Exams,
  Pdf,
});

viewPdf.navigationOptions = {
  tabBarLabel: 'Exames',
  tabBarIcon: ({ tintColor }) => (
    <FontAwesomeIcon size={20} icon={faFileMedicalAlt} color={tintColor} />
  ),
  header: () => null,
};

const tabsNavigator = createBottomTabNavigator(
  {
    Home,
    Exams: viewPdf,
    MedicalRecord,
    Partners,
    Configuration,
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#E64D57',
      inactiveTintColor: '#A4A6B3',
      style: {
        backgroundColor: '#363740',
      },
    },
  },
);

const switchNavigator = createSwitchNavigator(
  {
    stackNavigation,
    tabsNavigator,
    SplashScreen,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

export default createAppContainer(switchNavigator);
