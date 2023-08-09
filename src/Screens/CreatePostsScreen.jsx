import { View, StyleSheet, Dimensions } from "react-native";

import TouchKeybordContainer from "../Components/TouchKeybordContainer.jsx";
import LoadPostComponent from "../Components/LoadPostComponent.jsx";

export default function CreatePostsScreen() {
  return (
    <TouchKeybordContainer>
      <View style={styles.container}>
        <LoadPostComponent />
      </View>
    </TouchKeybordContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 34,
    backgroundColor: "#ffffff",
    width: Dimensions.get("window").width,
  },
});
