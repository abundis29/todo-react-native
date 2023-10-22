import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './LoadingStyles';

const Loading = () => {

  return (
    <View style={styles.loadingView}>
      <ActivityIndicator
        size="large"
      ></ActivityIndicator>
      <Text
        style={{ ...styles.loadingText}}
      >
        Loading ...
      </Text>
    </View>
  );
};
export default Loading;
