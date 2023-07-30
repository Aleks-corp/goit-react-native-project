import { StyleSheet } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./fonts/Roboto-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <RegistrationScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
