import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {store, persistor} from 'store/index';

import Loading from 'view/components/Loading';
import App from './app/App';

import {name as appName} from './app.json';

const Elegant = () => (
  <>
    <App />
  </>
);

AppRegistry.registerComponent(appName, () => Elegant);
