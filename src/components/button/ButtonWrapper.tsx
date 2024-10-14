import React, {FC, memo, useMemo} from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {WText} from '../text';
import {ExtendTheme, useTheme} from '@react-navigation/native';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  action?: () => void;
};

const ButtonWrapper: FC<Props> = ({title, style, action}) => {
  const theme = useTheme();
  const styles = useMemo(() => makeStyles(theme), [theme]);
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={action}>
      <WText text={title} />
    </TouchableOpacity>
  );
};

export default memo(ButtonWrapper);

const makeStyles = (theme: ExtendTheme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      padding: 10,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
