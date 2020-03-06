
import * as Font from 'expo-font';

export default class App extends Component {
  
  componentDidMount(){
    const socket = io("http://127.0.0.1:3001")
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
