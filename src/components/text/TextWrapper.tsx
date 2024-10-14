import React, {FC, memo} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface Props extends TextProps {
  text: string;
  style?: StyleProp<TextStyle>;
  color?: string;
  fontSize?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

const TextWrapper: FC<Props> = ({
  text,
  style,
  color,
  fontSize,
  textAlign,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[
        style,
        {
          color: color,
          fontSize: fontSize,
          textAlign: textAlign,
        },
      ]}>
      {text}
      {props.children}
    </Text>
  );
};

export default memo(TextWrapper);
