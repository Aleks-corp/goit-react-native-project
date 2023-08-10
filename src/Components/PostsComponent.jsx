import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import PostsUserComponent from "./PostsUserComponent";

export default function PostsComponent({ data, user }) {
  const renderItem = ({ item }) => {
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
          </View>
          {item.location && (
            <View style={styles.postLocation}>
              <Feather name="map-pin" size={24} color="#afafaf" />
              <Text style={styles.postLocationText}>
                {`${item.location.city} Region, ${item.location.country}`}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<PostsUserComponent user={user} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  postContainer: {
    marginBottom: 32,
  },
  postImgWrapper: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
