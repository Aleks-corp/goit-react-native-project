import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function NewPostFormComponent({
  title,
  setTitle,
  location,
  setLocation,
  onSubmit,
  image,
}) {
  const [inputFocus, setInputFocus] = useState("");
  return (
    <>
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
          !title || !location || !image
            ? styles.btnContainer
            : [styles.btnContainer, styles.btnContainerActive]
        }
        disabled={!title || !location || !image}
        onPress={onSubmit}
      >
        <Text
          style={
            !title || !location || !image
              ? styles.btnText
              : [styles.btnText, styles.btnTextActive]
          }
        >
          Опубліковати
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
