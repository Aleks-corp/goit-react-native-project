import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import PostCommentsComponent from "../Components/PostCommentsComponent";

export default function CommentsScreen({ route }) {
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <PostCommentsComponent id={id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#ffffff",
  },
});
