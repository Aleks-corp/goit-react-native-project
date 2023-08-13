import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import data from "../api/data.js";

export default function CommentsScreen({ route }) {
  const { id } = route.params;
  const index = data.findIndex((item) => item.id === id);
  const item = data[index];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.postImgWrapper}>
          <Image
            style={styles.postImg}
            source={{
              uri: item.img,
            }}
          />
        </View>
        <Text style={styles.postTitle}>{item.title}</Text>
        <View style={styles.postDescription}>
          <View style={styles.postComments}>
            <Feather
              name="message-circle"
              size={24}
              color={item.comments.length > 0 ? "#FF6C00" : "#afafaf"}
            />
            <Text
              style={
                item.comments.length > 0
                  ? [styles.postCommentsText, styles.postCommentsMoreZero]
                  : styles.postCommentsText
              }
            >
              {item.comments.length}
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Feather
                name="thumbs-up"
                size={24}
                color={item.likes > 0 ? "#FF6C00" : "#afafaf"}
                style={styles.postLikes}
              />
            </TouchableOpacity>
            <Text
              style={
                item.likes > 0
                  ? [styles.postCommentsText, styles.postCommentsMoreZero]
                  : styles.postCommentsText
              }
            >
              {item.likes}
            </Text>
          </View>
          {item.location && (
            <View style={styles.postLocation}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MapScreen", {
                    coords: item.location.coords,
                  });
                }}
              >
                <Feather name="map-pin" size={24} color="#afafaf" />
              </TouchableOpacity>
              <Text style={styles.postLocationText}>
                {item.location.country}
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  postContainer: {
    backgroundColor: "#ffffff",
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  postImgWrapper: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: 8,
  },
  postTitle: {
    marginTop: 8,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  postDescription: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  postComments: {
    flexDirection: "row",
    alignItems: "center",
  },
  postCommentsText: {
    marginLeft: 6,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  postCommentsMoreZero: {
    color: "#212121",
  },
  postLikes: {
    marginLeft: 24,
  },
  postLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  postLocationText: {
    marginLeft: 6,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
