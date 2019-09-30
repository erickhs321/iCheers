import React from 'react';

import Home from './Home';

import Login from './Login';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const navigator = createDrawerNavigator({
  Home,
});

export default createAppContainer(navigator);
