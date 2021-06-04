import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-navigation'

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

