import 'react-native-gesture-handler';
import React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesStack from './FavoritesStack/FavoritesStack';
import JobStack from './JobStack/JobStack';
import {NavigationContainer} from '@react-navigation/native';

function Router() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="JobStack"
          component={JobStack}
          options={{
            headerShown: false,
            title: 'Jobs',
            drawerActiveTintColor: '#ef5350',
          }}
          headerStyle={{
            color: 'red',
          }}
        />
        <Drawer.Screen
          name="FavoritesStack"
          component={FavoritesStack}
          options={{
            headerShown: false,
            title: 'Favorited Jobs',
            drawerActiveTintColor: '#ef5350',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Router;
