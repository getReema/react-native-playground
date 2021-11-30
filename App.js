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

export default function App() {
  const handelPress = () => {
    console.log("Button Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button color="pink" title="Click Me" onePress={()=>{
        Alert.alert('My Title', "My Message",[
          {text: 'Yes', 
          onPress:()=>{console.log('Yes Clicked')}
        },{
          text:'No',
          onPress: () => {console.log('No Pressed')}
        }
        ])
      }} />

      
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
