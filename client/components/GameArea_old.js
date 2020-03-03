import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const GameArea = () => {
  return (
    <View style={styles.floor_container}>
      <View style={styles.header_container}>
        <View style={styles.scores_left_container} />
        <Text style={styles.score_left}>2</Text>
        <Text style={styles.team_text_left}>ABC</Text>
        <View style={styles.team_container_top} />
        <Text style={styles.team_container_text}>XYZ</Text>
        <View style={styles.timer_container} />
        <Text style={styles.timer}>90</Text>
        <Text style={styles.team_text_right}>XYZ</Text>
        <Text style={styles.score_right}>2</Text>
        <View style={styles.scores_right_container} />
        <View style={styles.score_background} />
      </View>
      <View style={styles.bird_cage}>
        <Image
          style={styles.center_bird}
          source={require('./assets/images/bird1.png')}
        />
        <View style={styles.bird_spot} />
      </View>
      <View style={styles.stroke_bottom} />
      <View style={styles.stroke_top} />
      <View style={styles.team_container_bottom} />
      <Text style={styles.team_container_text_bot}>ABC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  floor_container: {
    height: 840,
    backgroundColor: '#A83131',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: 'hidden',
  },

  header_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    zIndex: 99999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7.1,
    elevation: 13,
  },

  bird_cage: {
    position: 'relative',
    zIndex: 2,
    height: 680,
    justifyContent: 'center',
    overflow: 'hidden',
  },

  center_bird: {
    position: 'relative',
    alignSelf: 'center',
    zIndex: 2,
    left: 1,
    top: 50,
    overflow: 'hidden',
  },

  bird_spot: {
    position: 'relative',
    bottom: 835,
    alignSelf: 'center',
    width: 100,
    height: 100,
    right: 1,
    borderWidth: 8,
    borderRadius: 100,
    paddingBottom: 10,
    zIndex: 1,
    backgroundColor: 'white',
    borderColor: '#250A26',
  },

  score_background: {
    position: 'absolute',
    width: 400,
    height: 60,
    backgroundColor: '#FFB100',
    borderBottomWidth: 10,
    borderTopWidth: 10,
    borderBottomColor: '#250A26',
    borderTopColor: '#250A26',
    justifyContent: 'center',
    paddingTop: 20,
  },

  timer_container: {
    position: 'relative',
    right: 103,
    width: 65,
    height: 65,
    borderWidth: 8,
    borderRadius: 100,
    paddingBottom: 10,
    zIndex: 7,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderColor: '#250A26',
  },

  timer: {
    position: 'relative',
    color: 'black',
    fontSize: 35,
    top: 10,
    right: 153,
    textAlign: 'center',
    zIndex: 8,
    fontFamily: 'FiraSansExtraCondensed-Bold',
  },

  scores_left_container: {
    position: 'relative',
    height: 88,
    width: 88,
    backgroundColor: '#250A26',
    zIndex: 1,
    borderBottomRightRadius: 80,
    overflow: 'hidden',
  },

  score_left: {
    position: 'relative',
    color: 'white',
    right: 65,
    fontSize: 58,
    textAlign: 'center',
    zIndex: 5,
    fontFamily: 'FiraSansExtraCondensed-Bold',
  },

  team_text_left: {
    position: 'relative',
    color: 'black',
    paddingTop: 16,
    right: 0,
    fontSize: 23,
    textAlign: 'center',
    zIndex: 9999,
    fontFamily: 'FiraSansExtraCondensed-Medium',
  },

  team_text_right: {
    position: 'relative',
    color: 'black',
    paddingTop: 16,
    right: 110,
    fontSize: 23,
    textAlign: 'center',
    zIndex: 9999,
    fontFamily: 'FiraSansExtraCondensed-Medium',
  },

  scores_right_container: {
    position: 'relative',
    height: 88,
    width: 88,
    backgroundColor: '#250A26',
    zIndex: 1,
    right: 103,
    borderBottomLeftRadius: 80,
    overflow: 'hidden',
  },

  score_right: {
    position: 'relative',
    color: 'white',
    right:35,
    fontSize: 58,
    zIndex: 5,
    fontFamily: 'FiraSansExtraCondensed-Bold',
  },

  team_container_top: {
    position: 'relative',
    top: 10,
    left: 6,
    width: 100,
    height: 100,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#250A26',
    zIndex: 0,
  },

  team_container_text: {
    position: 'relative',
    top: 70,
    right: 57,
    fontSize: 20,
    color: 'white',
    zIndex: 2,
    fontFamily: 'FiraSansExtraCondensed-Bold',
  },
  team_container_text_bot: {
    position: 'relative',
    bottom: 220,
    alignSelf: 'center',
    fontSize: 40,
    color: 'white',
    zIndex: 9,
    fontFamily: 'FiraSansExtraCondensed-Bold',
  },

  team_container_bottom: {
    position: 'relative',
    bottom: 20,
    left: 118,
    width: 180,
    height: 220,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: '#250A26',
    zIndex: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7.1,
    elevation: 13,
  },

  stroke_bottom: {
    position: 'relative',
    borderColor: 'rgba(255, 255, 255, .5)',
    borderStyle: 'dotted',
    borderWidth: 3,
    bottom: 95,
    width: 250,
    alignSelf: 'center',
    zIndex: 1,
  },

  stroke_top: {
    position: 'relative',
    borderColor: 'rgba(255, 255, 255, .5)',
    borderStyle: 'dotted',
    borderWidth: 3,
    bottom: 590,
    width: 250,
    alignSelf: 'center',
    zIndex: 1,
  },
});

export default GameArea;
