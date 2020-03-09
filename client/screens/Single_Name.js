import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Button,
  Alert,
  TextInput
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as Font from 'expo-font';


export default function Single_Name({navigation}) {

  const [TeamName, onChangeTeamName] = React.useState('team_name');

  
    return (
      <View style={styles.container}>
        <View style={styles.propic}></View>
        {/* {this._pickImage} */}
        <View style={styles.titleContainer}>
        <Text style={styles.Title}>NEW TOURNAMENT</Text>
        </View>
      <View style={styles.floor_container}>
      <Text style={styles.createText}>Create Team Name</Text>
      <TextInput 
      style={styles.playerName}
      autoCapitalize={"characters"}
      placeholder={'ABC'}
      onChangeText={text => onChangeTeamName(text)}
      maxLength= {3}
    />
   
   <Text style={styles.centerText}>VS.</Text>
   <Text
      style={styles.playerName}
      maxLength= {3}>CPU</Text>
      <TouchableOpacity style={styles.singleButton}
              color='white'
              title="Let's Play"
              underlayColor='#fff'
              onPress={() => navigation.navigate('GameArea')}>
              <Text style={styles.buttonText}>TAP IN</Text>
      </TouchableOpacity>
    
      </View>
      </View>
    );
  }




const styles = StyleSheet.create({

  createText: {
    alignSelf:'center',
    color:'white',
    fontSize: 20,
    paddingTop:20,
    textAlign:'center',
    zIndex:9999,
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 2,
    alignSelf:'center',
    marginTop:50,
    marginBottom:50,
           // fontFamily: 'FiraSansExtraCondensed-Bold',

  },

  centerText: {
    alignSelf:'center',
    justifyContent:'center',
    color:'white',
    fontSize: 50,
    textAlign:'center',
    zIndex:9999,
       // fontFamily: 'FiraSansExtraCondensed-Bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 2,
    alignSelf:'center',
    marginTop:20,
    marginBottom:20,
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
    width: wp("55%"),
    marginTop:50,
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

 

  playerName: {
    color: '#250A26',
    justifyContent:'center',
    fontSize: 120,
    fontWeight: 'bold',
    textAlign:'center',
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
