import { ImageBackground, StyleSheet, View } from 'react-native';
import PostsScreen from './src/Screens/PostsScreen.js';
import { useFonts } from 'expo-font';
import BGImage from './assets/Image/PhotoBG.png';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={BGImage} style={styles.image}>
        <PostsScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
  },
});
