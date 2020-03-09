import * as React from 'react';
import { StyleSheet, View, Image , TouchableOpacity, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default function HomeScreen({navigation}) {


  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage}
      source={require('../components/assets/images/home_logo.png')}>
        
      </Image>
      <TouchableOpacity style={styles.signInButton}
              color='white'
              title="Let's Play"
              underlayColor='#fff'
              onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signInButtonText}>TAP IN</Text>
      </TouchableOpacity>
      
    </View>
    
  );
  
}

HomeScreen.navigationOptions = {
  header: false,
};

const styles = StyleSheet.create({
  signInButton: {
    justifyContent:'center',
    position:'absolute',
    alignSelf:'center',
    bottom:hp("25%"),
    width: 180,
    height:70,
    backgroundColor:'#A83131',
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
  signInButtonText: {
    color:'#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop : 5,
    // fontFamily: 'FiraSansExtraCondensed-Bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 2,
  },
 


  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor: '#240a25',
    overflow:'hidden',
  },

  backgroundImage: {
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    overflow:'hidden',
  },

  login:{
    width:200,
    height: 100,
    backgroundColor:'#A83131',
  }
});
