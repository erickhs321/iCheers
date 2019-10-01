import React from 'react';

import Home from './Home';

import Login from './Login';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const drawerNavigator = createDrawerNavigator({
  Home,
});

const switchNavigator = createSwitchNavigator({
  Login,
});

let a = 1;
export default createAppContainer(a === 2 ? drawerNavigator : switchNavigator);
