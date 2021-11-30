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
 

  return (
    
    <View style={{backgroundColor: '#eee', flex:1 }}>

      <View style ={{
        background: 'dodgerblue',
        flex:2
      }}>
      </View>

      <View style ={{
        background: 'gold',
        flex:1
      }}>
      </View>

      <View style ={{
        background: 'tomato',
        flex:1
      }}>
      </View>

    </View>
  );
}

// const styles = StyleSheet.create({

// });
