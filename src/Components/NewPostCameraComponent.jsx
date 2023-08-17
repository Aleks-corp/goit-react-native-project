import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function NewPostCameraComponent({ image, setImage }) {
  const [loadingTakePhoto, setLoadingTakePhoto] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] =
    Camera.useCameraPermissions();
  const [permissionLibrary, requestPermissionLibrary] =
    MediaLibrary.usePermissions();

  if (!permissionCamera || !permissionLibrary) {
    return <ActivityIndicator size="large" color="#FF6C00" />;
  }

  return (
    <>
      <View style={styles.loadImgWrapper}>
        {!permissionCamera.granted ? (
          <TouchableOpacity
            onPress={async () => {
              requestPermissionCamera();
            }}
          >
            <Text style={styles.alertText}>No access to camera. </Text>
            <Text style={styles.alertText}>
              Tap to try again or change it in Settings
            </Text>
          </TouchableOpacity>
        ) : image ? (
          <View style={styles.loadImgWrapper}>
            <Image
              style={styles.loadImg}
              source={{
                uri: image,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setImage("");
              }}
            >
              <View style={styles.delIconWrapper}>
                <Feather name="trash-2" size={24} color="#BDBDBD" />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Camera
            style={styles.loadCameraWrapper}
            type={type}
            ref={setCameraRef}
          >
            <TouchableOpacity
              disabled={loadingTakePhoto}
              onPress={async () => {
                if (cameraRef) {
                  try {
                    setLoadingTakePhoto(true);
                    const { uri } = await cameraRef.takePictureAsync();
                    /* SAVE to Library in Phone */
                    // await MediaLibrary.createAssetAsync(uri);
                    setImage(uri);
                    /* FOR ANDROID SIMULATOR ONLY TO CHECK*/
                    // const result = await ImagePicker.launchCameraAsync();
                    // const uri = result.assets[0].uri;
                    // setImage(uri);
                    setLoadingTakePhoto(false);
                  } catch (error) {
                    console.log(error.message);
                    setLoadingTakePhoto(false);
                  }
                }
              }}
            >
              <View style={styles.loadIconWrapper}>
                {loadingTakePhoto ? (
                  <ActivityIndicator size="small" color="#FF6C00" />
                ) : (
                  <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
                )}
              </View>
            </TouchableOpacity>
          </Camera>
        )}
      </View>
      <View style={styles.cameraWrapper}>
        <TouchableOpacity
          disabled={loadingTakePhoto}
          onPress={async () => {
            if (!permissionLibrary.granted) {
              requestPermissionLibrary();
            }
            try {
              setLoadingTakePhoto(true);
              const imgData = await ImagePicker.launchImageLibraryAsync({
                // base64: true,
                quality: 0.3,
              });
              if (!imgData.canceled) {
                setImage(imgData.assets[0].uri);
              }
              setLoadingTakePhoto(false);
            } catch (error) {
              console.log(error.message);
              setLoadingTakePhoto(false);
            }
          }}
        >
          <Text style={styles.loadText}>Завантажте фото</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType((current) =>
              current === CameraType.back ? CameraType.front : CameraType.back
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
    position: "relative",
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

  delIconWrapper: {
    position: "absolute",
    top: -45,
    transform: [{ translateX: -20 }],
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#E8E8E8",
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
