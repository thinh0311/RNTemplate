import '@react-navigation/native'; //require import
/*
  - Document theme react navigation
  - Link: https://reactnavigation.org/docs/themes/
*/
declare module '@react-navigation/native' {
  export type ExtendTheme = {
    dark: boolean;
    colors: {
      //The primary color of the app used to tint various elements.
      //Usually you'll want to use your brand color for this.
    };
  };
  export function useTheme(): ExtendTheme;
}
