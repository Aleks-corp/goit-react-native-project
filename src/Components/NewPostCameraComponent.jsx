import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

export default function NewPostCameraComponent({ image, setImage }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <>
      <View style={styles.loadImgWrapper}>
        {hasPermission === false ? (
          <TouchableOpacity
            onPress={async () => {
              const { status } = await Camera.requestCameraPermissionsAsync();
              await MediaLibrary.requestPermissionsAsync();
              setHasPermission(status === "granted");
            }}
          >
            <Text style={styles.alertText}>No access to camera. </Text>
            <Text style={styles.alertText}>
              Tap to try again or change it in Settings
            </Text>
          </TouchableOpacity>
        ) : image ? (
          <Image
            style={styles.loadImg}
            source={{
              uri: image,
            }}
          />
        ) : (
          <Camera
            style={styles.loadCameraWrapper}
            type={type}
            ref={setCameraRef}
          >
            <View style={styles.loadIconWrapper}>
              <TouchableOpacity
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    /* SAVE to Library in Phone */
                    // await MediaLibrary.createAssetAsync(uri);
                    setImage(uri);
                    /* FOR ANDROID SIMULATOR ONLY TO CHECK*/
                    // const result = await ImagePicker.launchCameraAsync();
                    // const uri = result.assets[0].uri;
                    // setImage(uri);
                  }
                }}
              >
                <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </Camera>
        )}
      </View>
      <View style={styles.cameraWrapper}>
        <TouchableOpacity
          onPress={async () => {
            if (hasPermission === false) {
              return;
            }
            const imgData = await ImagePicker.launchImageLibraryAsync({
              // base64: true,
              quality: 0.3,
            });
            console.log("imgData:", imgData);
            if (!imgData.canceled) {
              setImage(imgData.assets[0].uri);
            }
          }}
        >
          <Text style={styles.loadText}>Завантажте фото</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text style={styles.loadText}>Змінити камеру</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  alertText: {
    textAlign: "center",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  loadCameraWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderRadius: 18,
    overflow: "hidden",
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
  cameraWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
