import '@react-navigation/native'; //require import
/*
  - Document theme react navigation
  - Link: https://reactnavigation.org/docs/themes/
*/
declare module '@react-navigation/native' {
  export type ExtendTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      backgroundColor: string;
    };
  };
  export function useTheme(): ExtendTheme;
}
