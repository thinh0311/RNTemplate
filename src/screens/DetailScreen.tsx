import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ScreenProps} from 'src/navigation';

const DetailScreen: FC<ScreenProps> = _ => {
  const params = _.route.params;
  return (
    <View>
      <Text>
        Detail Screen
        {params?.itemId}
      </Text>
    </View>
  );
};

export default DetailScreen;
