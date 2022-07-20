import React,{useState} from 'react';
import { ImageBackground,StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import GameScreen from './src/screens/GameScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  
  const [fontsLoaded] = useFonts({
    'chewie': require('./assets/fonts/ChewieRegular.otf'),
    'chewieBold': require('./assets/fonts/ChewieBold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const handleNumber=(num)=>{
    setUserNumber(num)
  }

  let screen = <WelcomeScreen handleNumber={handleNumber}/>

  if(userNumber) screen = <GameScreen/>

  return (
    <ImageBackground style={styles.container} source={require('./src/images/background.png')}>
      {screen}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

