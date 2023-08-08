import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import UserImg from "../../assets/Image/User-circle.png";
import { Feather } from "@expo/vector-icons";
import data from "../Constants/data.js";

export default function PostsScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.imageWrapper}>
            <Image style={styles.userImg} source={UserImg} />
          </View>
          <View>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userEmail}>email@email.co</Text>
          </View>
        </View>

        {data.map((item) => (
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
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    width: Dimensions.get("window").width,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#999999",
    marginRight: 8,
  },
  userImg: {
    width: 60,
    height: 60,
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80);",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },

  postContainer: {
    marginBottom: 34,
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
