import { View, StyleSheet } from "react-native";

import TouchKeybordContainer from "../Components/TouchKeybordContainer.jsx";
import LoadPostComponent from "../Components/LoadPostComponent.jsx";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <TouchKeybordContainer>
        <LoadPostComponent />
      </TouchKeybordContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
