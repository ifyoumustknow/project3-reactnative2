import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createStackNavigator();

function HomePage() {
  return (
    <View style={styles.container}>
        <HomeScreen/>
    </View>
  );
}

function SignIn() {
  return (
    <View style={styles.container}>
        <SignInScreen/>
    </View>
  );
}


function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
             headerShown: false
      }}
         initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={HomePage} />
        
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;