import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
  

        <Text> Hello React Native </Text>
        <Image source={require('./assets/icon2.png')} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
