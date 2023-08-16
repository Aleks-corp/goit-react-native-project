import {
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import data from "../api/data.js";
import { useState } from "react";
import CommentRenderComponent from "./CommentRenderComponent.jsx";
import { KeyboardAvoidingView } from "react-native";

export default function PostCommentsComponent({ id }) {
  const index = data.findIndex((item) => item.id === id);
  const { comments, img } = data[index];

  const [newComment, setNewComment] = useState("");
  const [inputFocus, setInputFocus] = useState("");

  const onSubmit = () => {
    setNewComment("");
    console.log("comment:", newComment);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset="80"
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={comments}
        renderItem={({ item, index }) =>
          CommentRenderComponent({ item, index })
        }
        keyExtractor={(item, index) => index}
        ListHeaderComponent={
          <View style={styles.ListHeaderWrapper}>
            <Image
              style={styles.postImg}
              source={{
                uri: img,
              }}
            />
          </View>
        }
      />
      <View style={styles.ListFooterWrapper}>
        <TextInput
          style={inputFocus ? [styles.input, styles.inputActive] : styles.input}
          onChangeText={(e) => setNewComment(e)}
          value={newComment}
          placeholder="Коментувати..."
          maxLength={200}
          onFocus={() => {
            setInputFocus("comment");
          }}
          onBlur={() => {
            setInputFocus("");
          }}
        />
        <TouchableOpacity
          style={
            !newComment
              ? styles.btnContainer
              : [styles.btnContainer, styles.btnContainerActive]
          }
          disabled={!newComment}
          onPress={onSubmit}
        >
          <Feather name="arrow-up" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  ListHeaderWrapper: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  ListFooterWrapper: {
    marginTop: 8,
    marginBottom: 16,
  },
  postImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: 8,
  },
  input: {
    position: "relative",
    height: 50,
    paddingLeft: 16,
    paddingRight: 46,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  inputActive: {
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
  },
  btnContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#999999",
  },
  btnContainerActive: {
    backgroundColor: "#FF6C00",
  },
});
