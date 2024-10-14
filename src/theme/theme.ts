import {DefaultTheme, ExtendTheme} from '@react-navigation/native';

const MyTheme: ExtendTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#06A0B5',
    backgroundColor: '#000000',
  },
};

const MyThemeDark: ExtendTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...MyTheme.colors,
  },
};

export const Themes = {
  light: MyTheme,
  dark: MyThemeDark,
};
