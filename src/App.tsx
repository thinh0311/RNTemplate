// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllScreen} from './navigation/AllScreen';

const RootStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {AllScreen.map(screen => (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
