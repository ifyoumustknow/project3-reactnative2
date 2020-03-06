import * as Font from 'expo-font'

const Fonts = async () => {
    await Font.loadAsync({
      "FiraSansExtraCondensed-Bold": require('../components/assets/fonts/FiraSansExtraCondensed-Bold.ttf'),
      "FiraSansExtraCondensed-Medium": require('../components/assets/fonts/FiraSansExtraCondensed-Medium.ttf')  
    })
};

export default Fonts;