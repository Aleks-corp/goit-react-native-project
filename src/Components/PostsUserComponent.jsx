import { View, Text, Image, StyleSheet } from "react-native";
import UserImg from "../../assets/Image/avatar.webp";

export default function UserPostsComponent({ user }) {
  const { name, surname, email, avatar } = user;
  return (
    <View style={styles.userContainer}>
      <View style={styles.userImageWrapper}>
        <Image
          style={styles.userImg}
          source={avatar ? { uri: avatar } : UserImg}
        />
      </View>
      <View>
        <Text style={styles.userName}>{`${name} ${surname}`}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  userImageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#999999",
    marginRight: 8,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 16,
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
});
