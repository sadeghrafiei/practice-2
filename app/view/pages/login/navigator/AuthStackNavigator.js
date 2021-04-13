import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {EmailScreen} from '../FormValid/Email';
import {PhoneNumber} from '../FormValid/PhoneNumber';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'Email'} component={EmailScreen} />
      <AuthStack.Screen name={'PhoneNumber'} component={PhoneNumber} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
