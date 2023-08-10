import { FlatList, StyleSheet, Dimensions } from "react-native";

import ProfileUserComponent from "./ProfileUserComponent";
import ItemRenderComponent from "./ItemRenderComponent";

export default function ProfilePostsComponent({ data, user }) {
  return (
    <FlatList
      style={styles.postsContainer}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => ItemRenderComponent({ item })}
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
