import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import twoBtnAlert from "../helpers/twoBtnAlert";
import { useEffect, useState } from "react";
import NewPostCameraComponent from "./NewPostCameraComponent";
import NewPostFormComponent from "./NewPostFormComponent";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

export default function NewPostComponent() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const clearNewPost = () => {
    setTitle("");
    setLocation("");
    setImage("");
  };

  const onSubmit = async (e) => {
    const locationCoord = await Location.getCurrentPositionAsync({});
    console.log("locationCoord:", locationCoord);
    const coords = {
      latitude: locationCoord.coords.latitude,
      longitude: locationCoord.coords.longitude,
    };
    console.log(
      `Title:${title}, Location:${location}, Coord:${coords.latitude} && ${coords.longitude}, ImagePath:${image}`
    );
    clearNewPost();
    navigation.navigate("PostsScreen");
  };
  return (
    <View style={styles.container}>
      <View>
        <NewPostCameraComponent image={image} setImage={setImage} />
        <NewPostFormComponent
          title={title}
          setTitle={setTitle}
          location={location}
          setLocation={setLocation}
          onSubmit={onSubmit}
          image={image}
        />
      </View>
      <View style={styles.btnDelContainer}>
        <TouchableOpacity
          style={styles.btnDelWrapper}
          onPress={() => {
            twoBtnAlert(clearNewPost);
          }}
        >
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    width: Dimensions.get("window").width,
  },

  btnDelContainer: {
    alignItems: "center",
  },
  btnDelWrapper: {
    width: 70,
    paddingVertical: 8,
    paddingHorizontal: 23,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});
