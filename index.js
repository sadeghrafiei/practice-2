import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry ,View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/lib/integration/react';
import { NavigationContainer } from "@react-navigation/native";
import {store, persistor} from 'store/index';
import {Router} from './app/routes/index'

import Loading from 'view/components/Loading';
import {App, TabBar , BottomTab} from './app/App';

import {name as appName} from './app.json';


const Elegant = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Elegant);
