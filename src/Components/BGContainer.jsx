import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import BGImage from "../../assets/Image/PhotoBG.png";

export default function BGContainer({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BGImage} style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
