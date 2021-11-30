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
        justifyContent:"space-around",
        alignItems: "center",
        alignContent: 'center',
        flexWrap: "wrap",
        
      }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          //flexBasis: 100,
          //flexGrow: 1,
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'royalblue',
          borderRadius: 50,
          shadowColor: 'grey',
          shadowOffset: {height:10, width:10},
          shadowOpacity: 1, // for ios 

          //for android:
          elevation:20,

        }}
      ></View>

      
    </View>
  )
}


