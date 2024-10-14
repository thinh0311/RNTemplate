import {FC} from 'react';
import {KeyScreen, ScreenProps} from '.';
import HomeScreen from 'src/screens/HomeScreen';
import DetailScreen from 'src/screens/DetailScreen';
import {BottomTabNavigator, DrawerNavigator, TopTab} from './Navigator';
import WelcomeScreen from 'src/screens/WelcomeScreen';

export interface IScreen {
  name: KeyScreen;
  component: FC<ScreenProps>;
}

export const AllScreen: IScreen[] = [
  {
    name: KeyScreen.WelCome,
    component: WelcomeScreen,
  },
  {
    name: KeyScreen.BottomTab,
    component: BottomTabNavigator,
  },
  {
    name: KeyScreen.Drawer,
    component: DrawerNavigator,
  },
  {
    name: KeyScreen.TopTab,
    component: TopTab,
  },
  {
    name: KeyScreen.Home,
    component: HomeScreen,
  },
  {
    name: KeyScreen.Details,
    component: DetailScreen,
  },
];
