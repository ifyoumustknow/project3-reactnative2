import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';


const navigator = createStackNavigator(
  {
    HomePage: HomeScreen,
    SignIn: SignInScreen
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(navigator);