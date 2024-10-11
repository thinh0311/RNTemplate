declare module 'react-native-config' {
  export interface NativeConfig {
    ENVIRONMENT_NAME: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
