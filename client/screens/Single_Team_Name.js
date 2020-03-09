import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Font from 'expo-font';



export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.propic}></View>
        {this._pickImage}
        <View style={styles.titleContainer}>
        <Text style={styles.Title}>NEW TOURNAMENT</Text>
        </View>
      <View style={styles.floor_container}>

      <TextInput 
      style={styles.playerName}
      onChangeText={text => onChangePlayerName(text)}
      placeholder={'CREATE A TEAM NAME'}
      maxLenth= {3}
    />
      <Text style={styles.centerText}>OR</Text>

      <TouchableOpacity style={styles.multiButton}
              color='white'
              title="Let's Play"
              underlayColor='#fff'
              onPress={() => this.props.navigation.navigate('GameArea_Multi')}>
              <Text style={styles.buttonText}>MULTI PLAYER</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

 centerText: {
    alignSelf:'center',
    justifyContent:'center',
    color:'white',
    fontSize: 20,
    textAlign:'center',
    paddingLeft : 2,
    paddingRight : 10,
    paddingTop : 10,
    zIndex:9999,
       // fontFamily: 'FiraSansExtraCondensed-Bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 2,
    alignSelf:'center',
    marginTop:50,
  },

  Title: {
    fontWeight: 'bold',
    color: '#250A26',
    alignSelf:"center",
    justifyContent:'center',
    fontSize: 22,
    zIndex: 99,
    fontWeight: 'bold',
    // fontFamily: 'FiraSansExtraCondensed-Bold',

  },


  singleButton: {
    justifyContent:'center',
    alignSelf:'center',
    width: wp("75%"),
    height:70,
    backgroundColor:'#FFB100',
    borderWidth:5,
    borderColor: '#250A26',
    borderRadius: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7.1,
    elevation: 13,
  },

  multiButton: {
    justifyContent:'center',
    alignSelf:'center',
    marginTop: 50,
    width: wp("75%"),
    height:70,
    marginTop:50,
    backgroundColor:'#FFB100',
    borderWidth:5,
    borderColor: '#250A26',
    borderRadius: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7.1,
    elevation: 13,
  },

  buttonText: {
    color: '#250A26',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop : 5,
    // fontFamily: 'FiraSansExtraCondensed-Bold',

  },
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#250A26',
    justifyContent:'space-evenly',
  },

   floor_container: {
    position:'relative',
    height:hp("90%"),
    top:hp("5%"),
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: '#A83131',
    borderRadius: 30,
    overflow: 'hidden',
  },

  propic:{
    position: 'absolute',
    right: 10,
    top:hp("4%"),
    width:50,
    height:50, 
    alignItems:'flex-end',
    flexDirection:'row',
    justifyContent:'flex-end',
    borderRadius:100,
    backgroundColor:'white',
    borderStyle:'solid',
    borderColor: '#525252',
    borderWidth:3,
    zIndex:99,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    
    },

    titleContainer:{
      flex:1,
      position:'absolute',
      justifyContent:'center',
      alignSelf:'center',
      width: wp("75%"),
      height:50, 
      borderRadius:100,
      backgroundColor:'white',
      borderStyle:'solid',
      borderColor:'#250A26',
      borderWidth:5,
      zIndex:99,
      top:hp("10%"),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
      
      },
  


});
