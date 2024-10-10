import {FC} from 'react';
import {KeyScreen, ScreenProps} from '.';
import HomeScreen from 'src/screens/HomeScreen';
import DetailScreen from 'src/screens/DetailScreen';

export interface IScreen {
  name: KeyScreen;
  component: FC<ScreenProps>;
}

export const AllScreen: IScreen[] = [
  {
    name: KeyScreen.Home,
    component: HomeScreen,
  },
  {
    name: KeyScreen.Details,
    component: DetailScreen,
  },
];
