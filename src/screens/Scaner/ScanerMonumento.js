
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, Image, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
export default class Destinos extends React.Component {



  render() {

    return (

      <View style={styles.container}>
        <Text>
          s
        </Text>
        <Image
        style={styles.image}
          source={{
            uri: 'https://www.turimexico.com/wp-content/uploads/2015/06/huejutla-de-reyes.jpg'
          }}
          
          />
          <View style={styles.container}>
            <Text>Holas</Text>
          </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(223, 153, 4)",
  },
  image: {
    flex: 1,
    resizeMode: "cover", width: "100%", height: "100%",
    justifyContent: "center"
  }

});

