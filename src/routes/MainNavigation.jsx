import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../src/Screens/LoginScreen.jsx";
import RegistrationScreen from "../../src/Screens/RegistrationScreen.jsx";
import BottomTabNavigation from "./BottomTabNavigation.jsx";
import MapScreen from "../../src/Screens/MapScreen.jsx";

const MainStack = createStackNavigator();

export default function MainNavigation() {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gesturesEnabled: false,
      }}
    >
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Posts" component={BottomTabNavigation} />
      <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: true,
          gesturesEnabled: true,
        }}
      />
    </MainStack.Navigator>
  );
}
