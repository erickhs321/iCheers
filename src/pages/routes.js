import React from 'react';

import Home from './Home';

import Login from './Login';

import Register from './Register';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

const stackNavigation = createStackNavigator({
  Login,
  Register,
});

const drawerNavigator = createDrawerNavigator({
  Home,
});

const switchNavigator = createSwitchNavigator({
  stackNavigation,
  drawerNavigator,
});

let a = 1;

export default createAppContainer(switchNavigator);
