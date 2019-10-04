import React from 'react';

import Home from './Home';

import Login from './Login';

import Register from './Register';

import SplashScreen from './SplashScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const stackNavigation = createStackNavigator({
  Login,
  Register,
});

const tabsNavigator = createBottomTabNavigator({
  Home,
  Register,
  Login,
});

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
