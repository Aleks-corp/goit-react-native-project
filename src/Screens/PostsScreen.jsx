import { StyleSheet, SafeAreaView, Dimensions, ScrollView } from "react-native";

import PostsUserComponent from "../Components/PostsUserComponent.jsx";
import PostsComponent from "../Components/PostsComponent.jsx";

import data from "../api/data.js";
import user from "../api/user.js";

export default function PostsScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <PostsUserComponent user={user} />
        <PostsComponent data={data} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    width: Dimensions.get("window").width,
  },
});
