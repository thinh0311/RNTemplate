import {DefaultTheme, ExtendTheme} from '@react-navigation/native';

const MyTheme: ExtendTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const MyThemeDark: ExtendTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export {MyTheme, MyThemeDark};
