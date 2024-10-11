import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

export enum KeyScreen {
  Home = 'HomeScreen',
  Details = 'DetailScreen',
  BottomTab = 'BottomTabNavigator',
  Drawer = 'DrawerNavigator',
  TopTab = 'TopTabNavigator',
}

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  [KeyScreen.Home]: undefined;
  [KeyScreen.Details]: {itemId: number};
  [KeyScreen.BottomTab]: undefined;
  [KeyScreen.Drawer]: undefined;
  [KeyScreen.TopTab]: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>;
