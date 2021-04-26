import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import VerifyCode from '../view/pages/login/FormValid/auth/verify';
import { HomeBottomTab } from './main';
import Login from '../view/pages/login/FormValid/auth/login';
import Register from '../view/pages/login/FormValid/auth/register';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={Register} />
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="Verify" component={VerifyCode} />
      <Stack.Screen name="HomeBottomTab" component={HomeBottomTab} />
    </Stack.Navigator>
  );
};
