import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './LabelStyles';

const Label = ({ title }: { title: string }): JSX.Element => {
  return (
    <View style={styles.label}>
      <Text style={styles.textWrapper}>{title}</Text>
    </View>
  );
};

export default Label;
