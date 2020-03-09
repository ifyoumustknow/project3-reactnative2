import React, { Component, useState, useEffect} from "react";
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import CreateProfile from './screens/CreateProfile';
import GameChoice from './screens/GameChoice';
import Single_Name from './screens/Single_Name';
import GameArea from './components/GameArea';
import Upload from './components/Upload';

import * as Font from 'expo-font'




const navigator = createStackNavigator(
  {
    HomePage: HomeScreen,
    SignIn: SignInScreen,
    GameArea: GameArea,
    Upload: Upload,
    CreateProfile: CreateProfile,
    GameChoice: GameChoice,
    Single_Name: Single_Name,
  },
  {
    initialRouteName: 'HomePage',
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);


const App = createAppContainer(navigator);

export default () => {
  return <App styles={styles.container}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#250A26',
  },
});


