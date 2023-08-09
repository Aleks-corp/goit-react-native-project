import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BGContainer from "../Components/BGContainer.jsx";
import { Feather } from "@expo/vector-icons";

import ProfileUserComponent from "../Components/ProfileUserComponent.jsx";
import ProfilePostsComponent from "../Components/ProfilePostsComponent.jsx";

import data from "../api/data.js";
import user from "../api/user.js";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <BGContainer>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inner}>
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
            <ProfileUserComponent user={user} />
            <ProfilePostsComponent data={data} />
          </View>
        </ScrollView>
      </View>
    </BGContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inner: {
    position: "relative",
    paddingHorizontal: 16,
    marginTop: 147,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  logOutBtn: {
    position: "absolute",
    right: 0,
    bottom: 50,
  },
});
