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
        <View style={styles.floor_container}>
          
      {this._pickImage}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#250A26',
  },

   floor_container: {
    flex:1,
    alignContent:'center',
    height: hp("93%"),
    marginTop:50,
    backgroundColor: '#A83131',
    borderRadius: 30,
    overflow: 'hidden',
  },

  propic:{
    flex:1,
    position:'absolute',
    justifyContent:'center',
    alignSelf:'center',
    width:100,
    height:100, 
    borderRadius:100,
    backgroundColor:'white',
    zIndex:99,
    top:hp("5%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    
    },
  },


});
