import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStack} from './auth';
import {MainStack} from './main';
import Token from '../helpers/token';
import SplashScreen from '../view/pages/splash';

const Stack = createStackNavigator();

export const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const getToken = async () => {
    try {
      const token = await Token.get();
      setUserToken(token);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        {isLoading ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : !userToken ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainStack" component={MainStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

