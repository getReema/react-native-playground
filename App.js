import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
  
<TouchableOpacity onPress={()=> console.log('Image Pressed')}>
        <Image source={{
          uri: 'https://saib.com.sa/sites/default/files/logo.png',
          width:412,
          height:122
        }} />
</TouchableOpacity>
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

