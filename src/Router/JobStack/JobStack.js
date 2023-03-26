import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import JobScreen from '../../screens/JobScreen/JobScreen';
import DetailScreen from '../../screens/DetailScreen/DetailScreen';

function JobStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobScreen"
        component={JobScreen}
        options={{title: 'Jobs'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
}

export default JobStack;
