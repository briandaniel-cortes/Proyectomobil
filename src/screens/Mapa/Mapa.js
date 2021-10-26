import React, { useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const App = () => {
const imageURL = ''
  const [mapRegion, setmapRegion] = useState({
    latitude: 21.1437,
    longitude:  -98.4181,
    latitudeDelta: 30.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion}> 
 </Marker>
      </MapView>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});