import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';

import Shop from './components/Shop/Shop';
export default function App() {
  return (
    <SafeAreaView> 
      <ScrollView>
        <Home></Home>
       <Shop></Shop>
      </ScrollView>
    <StatusBar style="auto" />
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
