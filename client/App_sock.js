
import * as Font from 'expo-font';
import io from 'socket.io-client';

export default class App extends Component {

  componentDidMount(){
    const socket =io("https://tap4tap.herokuapp.com/")

  }
 
  render(){
    return (
      <View style={styles.container}>
        <GameArea />
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
});
