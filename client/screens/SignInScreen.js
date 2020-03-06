import * as React from 'react';
import { StyleSheet, View, Button, Image, TextInput, Text, TouchableOpacity} from 'react-native';
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
     <TouchableOpacity style={styles.signInButton}
            
              onPress={() => navigation.navigate('GameArea')}>
              <Text style={styles.signInButtonText}>F</Text>
      </TouchableOpacity>
      </View>
      <Button title="Back" color="white" onPress={() => navigation.navigate('HomePage')}>Back</Button>
    </View>
  );
}

SignInScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  signInButton: {
    alignSelf:'center',
    width: 250,
    height:10,
    paddingTop:25,
    paddingBottom:25,
    backgroundColor:'#A83131',
    borderRadius: 45,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7.1,
    elevation: 13,
  },

  signInButtonText: {
    color:'white',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign:'center',
    paddingLeft : 2,
    paddingRight : 10,
    paddingTop : 5,
    zIndex:9999,
  },

  container: {
      height: 900,
      backgroundColor: '#250A26',
  },
  playerName: {
    backgroundColor: 'white',
    height: 40,
    width: 250,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 20,
    fontFamily: 'FiraSansExtraCondensed-Bold',

  },

  password: {
    backgroundColor: 'white',
    height: 40,
    width: 250,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 30,
    fontFamily: 'FiraSansExtraCondensed-Bold',

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
      marginTop: 10,
      fontFamily: 'FiraSansExtraCondensed-Bold',

  }
});
