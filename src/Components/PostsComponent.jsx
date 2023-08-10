import { StyleSheet, FlatList } from "react-native";

import PostsUserComponent from "./PostsUserComponent";
import ItemRenderComponent from "./ItemRenderComponent";

export default function PostsComponent({ data, user }) {
  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => ItemRenderComponent({ item })}
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
