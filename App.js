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
  Alert
} from "react-native";

export default function App() {
  const handelPress = () => {
    console.log("Button Pressed");
  };

  return (
    <View style={styles.container}>
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
