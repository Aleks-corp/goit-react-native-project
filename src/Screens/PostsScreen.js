import { StyleSheet } from 'react-native';
import RegistrationScreen from '../Screens/RegistrationScreen.js';
import LoginScreen from '../Screens/LoginScreen.js';

export default function PostsScreen() {
  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
