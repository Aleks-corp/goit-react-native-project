import { View, SafeAreaView, StyleSheet, Dimensions } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function MapScreen({ route }) {
  const { coords } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        mapType="standard"
        minZoomLevel={5}
      >
        <Marker
          title="I am here"
          coordinate={{
            latitude: coords.latitude,
            longitude: coords.longitude,
          }}
          description="Hello"
        />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
