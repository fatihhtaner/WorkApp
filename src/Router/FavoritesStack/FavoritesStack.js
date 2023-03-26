import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from '../../screens/FavoritesScreen/FavoritesScreen'
import DetailScreen from '../../screens/DetailScreen/DetailScreen'

function FavoritesStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}


export default FavoritesStack;