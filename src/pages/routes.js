import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import SplashScreen from './SplashScreen';
import Exams from './Exams';
import MedicalRecord from './MedicalRecord';
import Configuration from './Configuration';
import Partners from './Partners';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const stackNavigation = createStackNavigator({
  Login,
  Register,
});

const tabsNavigator = createBottomTabNavigator(
  {
    Home,
    Exams,
    MedicalRecord,
    Partners,
    Configuration,
  },
  {
    tabBarOptions: {
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
