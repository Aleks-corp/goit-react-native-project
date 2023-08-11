import { FlatList, StyleSheet, Dimensions } from "react-native";

import ProfileUserComponent from "./ProfileUserComponent";
import PostRenderComponent from "./PostRenderComponent";

export default function ProfilePostsComponent({ data, user }) {
  return (
    <FlatList
      style={styles.postsContainer}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => PostRenderComponent({ item })}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<ProfileUserComponent user={user} />}
    />
  );
}

const styles = StyleSheet.create({
  postsContainer: {
    flex: 1,
    marginBottom: Dimensions.get("window").height / 13,
  },
});
