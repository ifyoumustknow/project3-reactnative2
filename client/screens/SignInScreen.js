import * as React from 'react';
import { StyleSheet, View, Button, Image, TextInput} from 'react-native';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function SignInScreen({navigation}) {

  // Debugging
  // console.log(navigation)

  const [playerName, onChangePlayerName] = React.useState('PLAYER NAME');
  const [password, onChangePassword] = React.useState('PASSWORD');
  return (
    <View style={styles.container}>
      <View style={styles.signInSheet}>
          <Image
          style={styles.tapSignInImage}
          source={require('../components/assets/images/tapSignIn.png')}/>
          <TextInput
      style={styles.playerName}
      onChangeText={text => onChangePlayerName(text)}
      value={playerName}
    />
    <TextInput
      style={styles.password}
      onChangeText={text => onChangePassword(text)}
      value={password}
    />
     <Button title="Submit" color="white" onPress={() => navigation.navigate('GameArea')}>SUBMIT</Button>
      </View>
      <Button title="Back" color="white" onPress={() => navigation.navigate('HomePage')}>Back</Button>
    </View>
  );
}

SignInScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
      height: 900,
      backgroundColor: '#250A26',
  },
  playerName: {
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    height: 40,
    width: 250,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 20
  },
  password: {
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    height: 40,
    width: 250,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 60
  },
  signInSheet: {
      height: 300,
      width: 350,
      marginTop: 230,
      alignSelf: "center",
      borderRadius: 30,
      backgroundColor: '#B49A9A'
  },
  tapSignInImage: {
      alignSelf: "center",
      marginTop: 10
  }
});
