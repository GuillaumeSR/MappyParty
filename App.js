import { StyleSheet, Text, View, Pressable, ImageBackground, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useStore } from "./store/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'AOTF': require('./assets/fonts/AOTFShinGoProHeavy.otf'),
  });

  const { random_map, randomMap } = useStore();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ImageBackground source={require ('./assets/background/Mario-Party-S-Background.jpg')}
    resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Image style={styles.logo} source={random_map.boardIcon}/>
      </View>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            randomMap()
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#e2b327' : '#fdfdfd',
            },
            styles.button,
        ]}>
          {({pressed}) => (
            <Text style={[{borderColor: pressed ? '#fdfdfd' : '#473a5b'}, {color: pressed ? '#fdfdfd' : '#473a5b'}, styles.buttonText]}>{pressed ? 'Choix de la carte' : 'Choisir une carte'}</Text>
          )}
        </Pressable>
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
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 25,
    marginBottom: 30,
  },
  buttonText: {
    fontFamily: 'AOTF',
    borderWidth: 2,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    marginTop: 100,
  },
});
