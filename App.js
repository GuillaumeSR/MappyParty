import { StyleSheet, Text, View, Pressable, ImageBackground, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useStore } from "./store/store";
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';

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
        <Image style={styles.logo} source={require ('./assets/logo/Super_Mario_Party_Jamboree_Logo.png')}/>
      </View>
      <ImageBackground style={styles.cardBackground} source={random_map.boardView}>
        <BlurView intensity={5} tint='light' style={styles.blurContainer}>
          <View style={styles.cardImage}>
            <Image style={styles.icon} source={random_map.boardIcon}/>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.text}>{random_map.name}</Text>
          </View>
          {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>{random_map.name}</Text>
            <Image style={styles.icon} source={random_map.boardIcon}/>
          </View> */}
        </BlurView>
      </ImageBackground>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            randomMap(),
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#e2b327' : '#fdfdfd',
            },
            styles.button,
        ]}>
          {({pressed}) => (
            <Text style={[, {borderColor: pressed ? '#fdfdfd' : '#473a5b'}, {color: pressed ? '#fdfdfd' : '#473a5b'}, styles.buttonText]}>{pressed ? 'Choix de la carte' : 'Choisir une carte'}</Text>
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
    marginTop: 30,
    width: 186,
    height: 150,
  },
  icon: {
    marginTop: 0,
    width: 250,
    resizeMode: 'contain',
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
  },
  text: {
    marginTop: 10,
    fontFamily: 'AOTF',
    color: 'white',
  },
  cardBackground: {
    flex: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 10,
    borderColor: 'white',
  },
  cardImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    paddingTop: 10,
  },
  cardText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
