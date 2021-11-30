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
  Platform,
} from "react-native";

import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flex: 1,
        flexDirection: "column", //column, row, column reverse, row reverse
        justifyContent:"space-around",
        alignItems: "center",
        flexWrap: "nowrap",
        
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          alignSelf:"flex-start"
        }}
      ></View>

      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      ></View>

      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      ></View>
    </View>
  );
}

// const styles = StyleSheet.create({

// });
