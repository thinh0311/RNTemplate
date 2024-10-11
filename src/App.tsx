// In App.js in a new project

import * as React from 'react';
import MainStack from './MainStack';
import {useColorScheme} from 'react-native';

function App() {
  const currentTheme = useColorScheme();

  return <MainStack currentTheme={currentTheme} />;
}

export default App;
