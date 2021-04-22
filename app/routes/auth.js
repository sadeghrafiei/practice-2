import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../view/pages/login/index';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
