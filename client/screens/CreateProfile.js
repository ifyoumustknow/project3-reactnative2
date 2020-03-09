import * as React from 'react';
import { StyleSheet, View, Button, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Upload from '../components/Upload';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function SignInScreen({navigation}) {
  

  const [playerName, onChangePlayerName] = React.useState('PLAYER NAME');
  const [password, onChangePassword] = React.useState('PASSWORD');
  const [location, onChangeLocation] = React.useState('LOCATION');


  return (
    <View style={styles.container}>
      <Text style={styles.Title}>CREATE PROFILE</Text>
      <View>
      <Upload/>
      </View>
          <TextInput 
      style={styles.playerName}
      onChangeText={text => onChangePlayerName(text)}
      placeholder={'CREATE A PLAYER NAME'}
    />
    <TextInput
      style={styles.password}
      onChangeText={text => onChangePassword(text)}
      placeholder={'CREATE A PASSWORD'}
    />
     <TextInput
      style={styles.password}
      onChangeText={text => onChangeLocation(text)}
      placeholder={'LOCATION'}
    />
     <TouchableOpacity style={styles.signInButton}
              onPress={() => navigation.navigate('GameChoice')}>
              <Text style={styles.signInButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    
    </View>
  );
}

SignInScreen.navigationOptions = {

  headerShown: false,
};

const styles = StyleSheet.create({
  proPic_Container:{
    height: 250,
    backgroundColor:'white',
    alignItems: 'center', 
    justifyContent: 'center',
},

  backButton: {
    alignSelf: 'center',
    marginTop: 30,
    color:"white",
  },

  signInButton: {
    alignSelf:'center',
    width: 250,
    height: 9,
    paddingTop:25,
    paddingBottom:25,
    backgroundColor:'#A83131',
    borderRadius: 45,
    marginTop: 30,
    shadowColor: '#000',

  },

  signInButtonText: {
    position:'absolute',
    alignSelf:'center',
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    paddingLeft : 2,
    paddingRight : 10,
    paddingTop : 10,
    zIndex:9999,
  },

  createprofile_text: {
    position:'absolute',
    alignSelf:'center',
    color:'white',
    fontSize: 20,
    textAlign:'center',
    paddingLeft : 2,
    paddingRight : 10,
    zIndex:9999,
  },

  container: {
      flex:1,
      justifyContent:'center',
      height:hp("70%"),
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
    // fontFamily: 'FiraSansExtraCondensed-Bold',

  },

  password: {
    backgroundColor: 'white',
    height: 40,
    width: 250,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 30,
    // fontFamily: 'FiraSansExtraCondensed-Bold',

  },
  Title: {
    position: 'relative',
    fontWeight: 'bold',
    color: 'white',
    top: 0,
    alignSelf:"center",
    fontSize: 32,
    zIndex: 99,
    // fontFamily: 'FiraSansExtraCondensed-Bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 2,
    alignSelf:'center',
    marginBottom:20,
    marginTop:20,
  },

  
});
