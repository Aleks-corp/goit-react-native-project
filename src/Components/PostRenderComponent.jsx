import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PostRenderComponent({ item, navigation }) {
  return (
    <View key={item.id} style={styles.postContainer}>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CommentsScreen", {
                id: item.id,
              });
            }}
          >
            <Feather
              name="message-circle"
              size={24}
              color={item.comments.length > 0 ? "#FF6C00" : "#afafaf"}
            />
          </TouchableOpacity>
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
            <Text style={styles.postLocationText}>{item.location.country}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
