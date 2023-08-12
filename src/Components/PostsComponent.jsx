import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PostsUserComponent from "./PostsUserComponent";
import PostRenderComponent from "./PostRenderComponent";

export default function PostsComponent({ data, user }) {
  const navigation = useNavigation();
  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => PostRenderComponent({ item, navigation })}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<PostsUserComponent user={user} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
