import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines= {3} onPress={()=> console.log('Text Pressed')}> Hello Open up App.js to start working on your app!
      Open up App.js to start working on your app!
      Open up App.js to start working on your app!
      Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    marginTop: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
