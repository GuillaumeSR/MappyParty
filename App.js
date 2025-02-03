import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'AOTFRegular': require('./assets/fonts/AOTFShinGoProRegular.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ImageBackground source={require ('./assets/board-view/super-mario-party-jamboree-website-board-1.jpg')}
    resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require ('./assets/logo/Super_Mario_Party_Jamboree_Logo.png')}/>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Choisir une carte
            </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'AOTFRegular',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 186,
    height: 150,
  },
});
