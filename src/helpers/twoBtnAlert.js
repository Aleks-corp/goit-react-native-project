import { Alert } from "react-native";
const twoBtnAlert = (
  onPressOk,
  TextOK = "OK",
  AlertTitleMessage = "Ви впевнені?",
  AlertMessage = "Очистити всі поля"
) =>
  Alert.alert(AlertTitleMessage, AlertMessage, [
    {
      text: TextOK,
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
