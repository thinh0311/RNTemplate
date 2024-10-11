import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllScreen} from './navigation/AllScreen';
import {KeyScreen, RootStackParamList} from './navigation';
import {ColorSchemeName} from 'react-native';
import {MyTheme, MyThemeDark} from './theme/theme';

const RootStack = createNativeStackNavigator<RootStackParamList>();

interface MainStackProps {
  currentTheme: ColorSchemeName;
}

const MainStack: FC<MainStackProps> = ({currentTheme}) => {
  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? MyThemeDark : MyTheme}>
      <RootStack.Navigator initialRouteName={KeyScreen.BottomTab}>
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
