import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function goBackBtn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Feather
        name="arrow-left"
        size={24}
        color="#999999"
        style={styles.goBackButton}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  goBackButton: {
    marginLeft: 16,
  },
});
