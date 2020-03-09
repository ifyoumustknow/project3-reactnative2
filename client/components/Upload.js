import * as React from 'react';
import { Button, Image, View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePickerExample extends React.Component {

  state = {
    image: null,
    uri:'',
  };

  render() {
    let { image } = this.state;

    return (
      <View style={styles.proPic_Container}>
        {image &&
          <Image source={{ uri: image }} style={styles.proPic} />}
                  <TouchableOpacity
          onPress={this._pickImage}>
        <Text style={styles.pickText}>Upload Photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
proPic_Container:{
    height: 250,
    alignItems: 'center', 
    justifyContent: 'center',
},

pickText:{
    position:'absolute',
    alignSelf:'center',
    color:'white',
    fontSize: 20,
    textAlign:'center',
    paddingLeft : 2,
    paddingRight : 10,
    paddingTop : 10,
    zIndex:9999,
},

proPic:{
    width: 150, 
    height: 150,
    borderRadius:100,
    borderStyle:'solid',
    borderColor: '#525252',
    borderWidth:7,
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
