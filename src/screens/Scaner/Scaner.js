import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,ImageBackground,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from 'expo-barcode-scanner';
export default function App() {
  var month = new Date().getMonth() + 1;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const navigation = useNavigation();

  const goToProduct = (data) => {
    navigation.push("Monumento", { data: data });
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    
    if(`${data}`=="ola"){
      alert(`verificado`);
      goToProduct(data)
    }else{
      alert(`no verificado`);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    
<View style={styles.container}>
  <View style={styles.arriba}>
  
  </View>
  <View style={styles.centro}>
  <BarCodeScanner 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scaner}
      />
      {scanned && <Button title={'Scanear Codigo Qr'} onPress={() => setScanned(false)} />}
  
  </View>
  <View style={styles.abajo}>
    
  </View>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(223, 153, 4)",
  },
  image: {
    flex: 1,
    resizeMode: "cover",width:"100%",height:"100%",
    justifyContent: "center"
  },
  image2: {
    width:500,height:300
    },    
  arriba:{
    flex: 2,
  },
  centro:{
    flex: 5,
  },
  abajo:{
    flex: 2,
    alignContent:"center",
    alignItems:"center"
  },
  Titulo:{
    fontSize:40,
    textDecorationColor:"white",
    color:"white",
    fontWeight:"bold"
  },
  touc:{
    backgroundColor:"rgba(255, 7, 90, 0.556)",
    width:300,
    borderRadius:100,
    alignItems:"center",
    flexDirection:"row"
  },
  touc2:{
    backgroundColor:"rgba(255, 7, 90, 0.556)",
    width:200,
    borderRadius:100,
    alignItems:"center",
    flexDirection:"row"
  },
  menu1:{
    alignItems:"center",alignContent:"center",alignSelf:"center",
    width:50,height:50
  },
  QRT:{
    width:"100%"
  },
  scaner:{
    width:"100%",height:"100%"
  }

});