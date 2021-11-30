import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from '@expo/vector-icons';
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
     
    <Text style = {{
      fontFamily: 'Courier',
      fontSize: 30,
      fontStyle: 'italic',
      fontWeight: '600',
      color: 'purple',
      textTransform: 'capitalize',
      textDecorationLine: 'underline',
      textAlign:'left',
      padding: 10,
      lineHeight:50
    }}>
Hello ! I love React  React React React React:) 
    </Text>

    <MaterialIcons name="auto-awesome" size={50} color="gold" />
    <MaterialIcons name="auto-awesome" size={50} color="gold" />
    <MaterialIcons name="auto-awesome" size={50} color="gold" />


    </View>
  );
}
