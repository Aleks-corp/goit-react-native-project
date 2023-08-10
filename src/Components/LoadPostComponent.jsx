import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function LoadPostComponent() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [inputFocus, setInputFocus] = useState("");

  let image;

  const onSubmit = (e) => {
    alert("Публікуємо...");
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.loadImgWrapper}>
          {image ? (
            <Image
              style={styles.loadImg}
              source={{
                uri: image,
              }}
            />
          ) : (
            <View style={styles.loadIconWrapper}>
              <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
            </View>
          )}
        </View>
        <Text style={styles.loadText}>Завантажте фото</Text>
        <TextInput
          style={
            inputFocus === "title"
              ? [styles.input, styles.inputActive]
              : styles.input
          }
          onChangeText={(e) => setTitle(e)}
          value={title}
          placeholder="Назва..."
          onFocus={() => {
            setInputFocus("title");
          }}
          onBlur={() => {
            setInputFocus("");
          }}
        />
        <View>
          <TextInput
            style={
              inputFocus === "location"
                ? [styles.input, styles.inputLocation, styles.inputActive]
                : [styles.input, styles.inputLocation]
            }
            onChangeText={(e) => setLocation(e)}
            value={location}
            placeholder="Місцевість..."
            onFocus={() => {
              setInputFocus("location");
            }}
            onBlur={() => {
              setInputFocus("");
            }}
          />
          <Feather
            name="map-pin"
            size={24}
            color="#BDBDBD"
            style={styles.locationIcon}
          />
        </View>
        <TouchableOpacity
          style={
            !title || !location
              ? styles.btnContainer
              : [styles.btnContainer, styles.btnContainerActive]
          }
          disabled={!title || !location}
          onPress={onSubmit}
          clear={() => {
            setLocation("");
            setTitle("");
          }}
        >
          <Text
            style={
              !title || !location
                ? styles.btnText
                : [styles.btnText, styles.btnTextActive]
            }
          >
            Опубліковати
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnDelContainer}>
        <TouchableOpacity
          style={styles.btnDelWrapper}
          onPress={() => {
            alert("Delete");
            setTitle("");
            setLocation("");
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
  loadImgWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  loadIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
  loadImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: 8,
  },
  loadText: {
    marginTop: 8,
    marginBottom: 32,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  input: {
    position: "relative",
    height: 50,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
  },
  inputActive: {
    borderColor: "#FF6C00",
  },
  inputLocation: {
    paddingLeft: 32,
    marginTop: 16,
  },
  locationIcon: {
    position: "absolute",
    top: 28,
    left: 5,
  },
  btnContainer: {
    padding: 16,
    marginTop: 32,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  btnContainerActive: {
    backgroundColor: "#FF6C00",
  },
  btnText: {
    color: "#BDBDBD",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  btnTextActive: {
    color: "#ffffff",
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
