import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';

import Shop from './components/Shop/Shop';
export default function App() {
  return (
    <SafeAreaView> 
   
     <Shop></Shop>
      <StatusBar style="auto" />
    <View style={styles.container}>
     <Home/>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
