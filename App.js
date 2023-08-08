import 'react-native-gesture-handler';
import React from 'react';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/routes/MainNavigation.jsx';

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
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
