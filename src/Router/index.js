import 'react-native-gesture-handler';
import React from 'react';
import {} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import store from '../redux/store/store';
import {Provider} from 'react-redux';
import JobStack from './JobStack/JobStack';
import FavoritesStack from './FavoritesStack/FavoritesStack'

function Router() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default Router;
