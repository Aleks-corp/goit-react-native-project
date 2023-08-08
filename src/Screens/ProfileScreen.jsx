import BGContainer from "../Components/BGContainer.jsx";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import data from "../Constants/data.js";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <BGContainer>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inner}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Feather
                name="log-out"
                size={24}
                color="#999999"
                style={styles.logOutBtn}
              />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
              <Image />
              <View style={styles.svgAdd}>
                <AntDesign name="pluscircleo" size={24} color="#999999" />
              </View>
            </View>
            <Text style={styles.header}>User Name</Text>
            <View style={styles.postsContainer}>
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
                            ? [
                                styles.postCommentsText,
                                styles.postCommentsMoreZero,
                              ]
                            : styles.postCommentsText
                        }
                      >
                        {item.comments.length}
                      </Text>
                      <Feather
                        name="thumbs-up"
                        size={24}
                        color={item.likes > 0 ? "#FF6C00" : "#afafaf"}
                        style={styles.postLikes}
                      />
                      <Text
                        style={
                          item.likes > 0
                            ? [
                                styles.postCommentsText,
                                styles.postCommentsMoreZero,
                              ]
                            : styles.postCommentsText
                        }
                      >
                        {item.likes}
                      </Text>
                    </View>
                    {item.location && (
                      <View style={styles.postLocation}>
                        <Feather name="map-pin" size={24} color="#afafaf" />
                        <Text style={styles.postLocationText}>
                          {item.location.country}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </BGContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inner: {
    position: "relative",
    paddingHorizontal: 16,
    marginTop: 147,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    position: "absolute",
    height: 120,
    width: 120,
    top: -60,
    left: Dimensions.get("window").width / 2,
    transform: [{ translateX: -60 }],
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  header: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
  },
  svgAdd: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 12,
    right: 0,
    bottom: 20,
    transform: [{ translateX: 12 }, { rotate: "45deg" }],
  },

  postsContainer: {
    marginBottom: 64,
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
  logOutBtn: {
    position: "absolute",
    right: 0,
    bottom: 50,
  },
});
