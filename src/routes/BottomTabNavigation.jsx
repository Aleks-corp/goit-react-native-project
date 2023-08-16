import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "../Screens/PostsScreen.jsx";
import ProfileScreen from "../Screens/ProfileScreen.jsx";
import CreatePostsScreen from "../Screens/CreatePostsScreen.jsx";
import { useNavigation } from "@react-navigation/native";
import goBackBtn from "../Components/goBackBtn.jsx";

export default function BottomTabNavigation() {
  const navigation = useNavigation();
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          const iconsProps = {
            iconName: "",
            color: "#212121",
          };

          switch (route.name) {
            case "PostsScreen":
              iconsProps.iconName = "grid";
              iconsProps.color = focused ? "#FF6C00" : "#212121";
              break;

            case "CreatePost":
              iconsProps.iconName = "plus";
              iconsProps.color = "#ffffff";
              break;

            case "Profile":
              iconsProps.iconName = "user";
              iconsProps.color = focused ? "#FF6C00" : "#212121";
              break;
          }
          return (
            <View style={route.name === "CreatePost" && styles.active}>
              <Feather
                name={iconsProps.iconName}
                size={size}
                color={iconsProps.color}
              />
            </View>
          );
        },
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle:
          Platform.OS === "ios"
            ? {
                paddingVertical: 10,
                paddingHorizontal: 30,
              }
            : {
                height: 60,
                paddingHorizontal: 30,
              },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: {
            backgroundColor: "#FFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 17,
            color: "#212121",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Feather
                name="log-out"
                size={24}
                color="#999999"
                style={styles.logOutBtn}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerStyle: {
            backgroundColor: "#FFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "normal",
            fontSize: 17,
            color: "#212121",
          },
          headerLeft: goBackBtn,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          gesturesEnabled: false,
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  active: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  goBackButton: {
    marginLeft: 16,
  },
  logOutBtn: {
    marginRight: 16,
  },
});
