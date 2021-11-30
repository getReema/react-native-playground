import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform

} from "react-native";

import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'


export default function App() {
  console.log(useDimensions());
  console.log(useDeviceOrientation());


const {landscape} = useDeviceOrientation();

const handelPress = () => {
  console.log('Button Pressed')
}

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? '100%':'30%',
      }}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  //  paddingTop: 25
  },
});
