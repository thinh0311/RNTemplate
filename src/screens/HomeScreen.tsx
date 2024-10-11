import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {KeyScreen, ScreenProps} from 'src/navigation';
import Config from 'react-native-config';

const HomeScreen: FC<ScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('HomeScreen', Config.ENVIRONMENT_NAME);
          navigation.navigate(KeyScreen.TopTab);
        }}>
        <Text>HomeScreen {Config.ENVIRONMENT_NAME}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
