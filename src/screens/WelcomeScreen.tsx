import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {FC, useMemo} from 'react';
import {ExtendTheme, useTheme} from '@react-navigation/native';
import {ScreenProps} from 'src/navigation';
import {WButton, WText} from 'src/components';

const WelcomeScreen: FC<ScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);

  return (
    <ImageBackground
      source={require('src/assets/images/welcome.png')}
      style={styles.container}>
      <View style={styles.bottom}>
        <WText
          text="From the latest to the greatest hits, play your favorite tracks onmusium now!"
          numberOfLines={3}
          color="white"
          fontSize={24}
          textAlign="center"
        />
        <WButton title="Get Started" style={styles.button} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const makeStyles = (theme: ExtendTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    bottom: {
      position: 'absolute',
      bottom: 0,
      padding: 30,
      backgroundColor: theme.colors.backgroundColor,
      width: '100%',
      height: '40%',
      borderTopLeftRadius: 52,
      borderTopRightRadius: 52,
      justifyContent: 'space-between',
    },
    button: {marginBottom: 20},
  });
