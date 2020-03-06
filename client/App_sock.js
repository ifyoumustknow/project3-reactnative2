import React, { Component, useState, useEffect} from "react";
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import GameArea from './components/GameArea';

const Stack = createStackNavigator();

function MyStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"  style={styles.container} component={HomeScreen } />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="GameArea" component={GameArea} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#250A26',
  },
});