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

import {name as appName} from './app.json';
import {App} from './app/helpers/useApi'

const Elegant = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Elegant);
