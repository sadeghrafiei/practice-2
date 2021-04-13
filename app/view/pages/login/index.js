import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStackNavigator from './navigator/AuthStackNavigator';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();


const Navigation = () => {
  return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AuthStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation;
