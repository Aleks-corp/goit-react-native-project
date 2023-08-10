import { View, StyleSheet } from "react-native";
import BGContainer from "../Components/BGContainer.jsx";

import ProfilePostsComponent from "../Components/ProfilePostsComponent.jsx";

import data from "../api/data.js";
import user from "../api/user.js";

export default function ProfileScreen() {
  return (
    <BGContainer>
      <View style={styles.container}>
        <ProfilePostsComponent data={data} user={user} />
      </View>
    </BGContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
