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
        flexDirection: "row", //column, row, column reverse, row reverse
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          //flexBasis: 100,
          //flexGrow: 1,
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
        }}
      ></View>

      <View
        style={{
          backgroundColor: "gold",
          width: 50,
          height: 50,
        }}
      ></View>

<View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin:20
        }}
      ></View>



    </View>
  );
}
