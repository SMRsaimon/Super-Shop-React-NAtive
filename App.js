import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';





export default function App() {
  return (

    <SafeAreaView>
      <ScrollView>
        <Home></Home>
        <Shop></Shop>
        <Footer />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

