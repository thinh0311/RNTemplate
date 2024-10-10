import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {KeyScreen, ScreenProps} from 'src/navigation';

const HomeScreen: FC<ScreenProps> = ({navigation, route}) => {
  //navigation.navigate(KeyScreen.Details, {itemId: 86});
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('HomeScreen');
          navigation.navigate(KeyScreen.Details, {itemId: 86});
        }}>
        <Text>HomeScreen</Text>
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
