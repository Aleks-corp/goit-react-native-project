import { StyleSheet } from 'react-native';
import RegistrationScreen from '../Components/RegistrationScreen.js';
import LoginScreen from '../Components/LoginScreen.js';

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
