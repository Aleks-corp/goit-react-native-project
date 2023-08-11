import { View, StyleSheet } from "react-native";

import TouchKeybordContainer from "../Components/TouchKeybordContainer.jsx";
import NewPostComponent from "../Components/NewPostComponent.jsx";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <TouchKeybordContainer>
        <NewPostComponent />
      </TouchKeybordContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
