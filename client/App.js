import React, { Component, useState, useEffect} from "react";
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import GameArea from './components/GameArea';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

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

const fetchFonts = () => {
  return Font.loadAsync({
    'FiraSansExtraCondensed-Bold': require('./components/assets/fonts/FiraSansExtraCondensed-Bold.ttf'),
    'FiraSansExtraCondensed-Medium': require('./components/assets/fonts/FiraSansExtraCondensed-Medium.ttf'),
  });
  };
  
const App = createAppContainer(navigator);

export default () => {
  return <App styles={styles.container}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#250A26',
  },
});

