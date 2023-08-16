import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import users from "../api/users.js";
import dayjs from "dayjs";

export default function CommentRenderComponent({ item, index }) {
  const user = users.find((user) => user.id === item.id);
  return (
    <View
      style={
        index % 2 === 0
          ? styles.container
          : [styles.container, styles.containerRewerse]
      }
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: user.avatar ? user.avatar : null,
          }}
        />
      </View>
      <View
        style={
          index % 2 === 0
            ? styles.commentContainer
            : [styles.commentContainer, styles.commentContainerReverse]
        }
      >
        <Text style={styles.commentText}>{item.comment}</Text>
        <Text style={styles.commentDate}>
          {dayjs(item.datetime).format("DD MMMM, YYYY | HH:mm")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 24,
    columnGap: 16,
  },
  containerRewerse: {
    flexDirection: "row-reverse",
  },
  imageContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#E8E8E8",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: 14,
  },
  commentContainer: {
    width: Dimensions.get("window").width - 76,
    padding: 16,
    backgroundColor: "#00000007",
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  commentContainerReverse: {
    borderRadius: 6,
    borderTopRightRadius: 0,
  },
  commentText: {
    marginBottom: 8,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
  },
  commentDate: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
  },
});
