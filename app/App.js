import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import Profile from './view/pages/Profile';

const App = () => {
  return (
    <PaperProvider>
      <Profile />
    </PaperProvider>
  );
};

export default App;
