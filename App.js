import React from 'react';
import HomeScreen from './components/Home/Home';
import ShopScreen from './components/Shop/Shop';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Shop" component={ShopScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

