import { StyleSheet, SafeAreaView, Dimensions, ScrollView } from "react-native";

import PostsComponent from "../Components/PostsComponent.jsx";

import data from "../api/data.js";
import user from "../api/user.js";

export default function PostsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PostsComponent data={data} user={user} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
});
