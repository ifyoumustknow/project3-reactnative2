import React, { Component } from "react";
import {View, StyleSheet} from 'react-native';
import io from 'socket.io-client';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import GameArea from './components/GameArea';



const navigator = createStackNavigator(
  {
    HomePage: HomeScreen,
    SignIn: SignInScreen,
    GameArea: GameArea
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(navigator);