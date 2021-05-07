import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export const TwoPlayer = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>TBD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
