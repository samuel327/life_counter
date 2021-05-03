import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DieContainer } from '../components/DieContainer';
export const DieRollerScreen = () => {
  return (
    <View style={styles.content}>
      <DieContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1 },
});
