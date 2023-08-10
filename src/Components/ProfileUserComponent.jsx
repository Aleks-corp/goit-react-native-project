import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import UserImg from "../../assets/Image/avatar.webp";
import { useNavigation } from "@react-navigation/native";

export default function ProfileUserComponent({ user }) {
  const navigation = useNavigation();
  const { name, surname, avatar } = user;
  return (
    <View style={styles.inner}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.profileAvatar}
          source={avatar ? { uri: avatar } : UserImg}
        />
        <TouchableOpacity
          onPress={
            avatar
              ? () => {
                  alert("Видаляємо аватарку");
                }
              : () => {
                  alert("Додаємо аватарку");
                }
          }
          style={avatar ? styles.svgRemoveBtn : styles.svgAddBtn}
        >
          <AntDesign
            name="pluscircleo"
            size={24}
            color={avatar ? "#999999" : "#FF6C00"}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>{`${name} ${surname}`}</Text>
      <TouchableOpacity
        style={styles.logOutBtn}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Feather name="log-out" size={24} color="#999999" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inner: {
    position: "relative",
    paddingHorizontal: 16,
    marginTop: Dimensions.get("window").height / 5.5,
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
  profileAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  header: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
  },
  svgRemoveBtn: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 12,
    right: 0,
    bottom: 14,
    transform: [{ translateX: 12 }, { rotate: "45deg" }],
  },
  svgAddBtn: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 12,
    right: 0,
    bottom: 14,
    transform: [{ translateX: 12 }],
  },
  logOutBtn: {
    position: "absolute",
    right: 16,
    top: 22,
  },
});
