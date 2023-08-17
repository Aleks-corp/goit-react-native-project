import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigation from "./BottomTabNavigation.jsx";
import LoginScreen from "../../src/Screens/LoginScreen.jsx";
import RegistrationScreen from "../../src/Screens/RegistrationScreen.jsx";
import MapScreen from "../../src/Screens/MapScreen.jsx";
import CommentsScreen from "../../src/Screens/CommentsScreen.jsx";
import GoBackBtn from "../Components/GoBackBtn.jsx";

const MainStack = createStackNavigator();

export default function MainNavigation() {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        gesturesEnabled: false,
        headerTitleAlign: "center",
      }}
    >
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Posts" component={BottomTabNavigation} />
      <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Мапа",
          headerShown: true,
          headerLeft: GoBackBtn,
        }}
      />
      <MainStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerShown: true,
          headerLeft: GoBackBtn,
        }}
      />
    </MainStack.Navigator>
  );
}
