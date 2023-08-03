import { StyleSheet } from 'react-native';
import RegistrationScreen from './RegistrationScreen.jsx';
import LoginScreen from './LoginScreen.jsx';

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
