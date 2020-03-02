import * as React from 'react';
import { StyleSheet, View, Image , Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.backgroundImage}
      source={require('../components/assets/images/home_logo.png')}>
      </Image>
      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width:500,
    height:900,
    backgroundColor: '#240a25',
    overflow:'hidden',
  },

  backgroundImage: {
    flex:1,
    justifyContent: 'center',
    alignSelf:'center',
    right:50,
    top:40,
  },

  login:{
    width:200,
    height: 100,
    backgroundColor:'#A83131',
  }
});
