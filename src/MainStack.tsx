import React, {FC, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllScreen} from './navigation/AllScreen';
import {RootStackParamList} from './navigation';
import {ColorSchemeName} from 'react-native';
import {Themes} from './theme/theme';
import BootSplash from 'react-native-bootsplash';

const RootStack = createNativeStackNavigator<RootStackParamList>();

interface MainStackProps {
  currentTheme: ColorSchemeName;
}

const MainStack: FC<MainStackProps> = ({currentTheme}) => {
  const onReady = useCallback(() => {
    console.log('Navigation is ready');
    BootSplash.hide({fade: true});
  }, []);

  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? Themes.dark : Themes.light}
      onReady={onReady}>
      <RootStack.Navigator>
        {AllScreen.map(screen => (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{headerShown: false}}
          />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
