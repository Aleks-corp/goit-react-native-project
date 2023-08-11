import { Alert } from "react-native";
const twoBtnAlert = (onPressOk) =>
  Alert.alert("Ви впевнені?", "Очистити всі поля", [
    {
      text: "OK",
      onPress: onPressOk,
    },
    {
      text: "Cancel",
      onPress: () => {
        return;
      },
      style: "cancel",
    },
  ]);
export default twoBtnAlert;
