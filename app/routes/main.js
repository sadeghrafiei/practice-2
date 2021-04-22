import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ArchiveStack, HomeBottomTab, NewPostStack, Profile} from '.';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="HomeBottomTab" component={HomeBottomTab} />
      <Stack.Screen name="AddPost" component={NewPostStack} />
      <Stack.Screen name="Archive" component={ArchiveStack} />
    </Stack.Navigator>
  );
};
