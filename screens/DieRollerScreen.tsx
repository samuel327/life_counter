import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DieContainer } from '../components/DieContainer';
export const DieRollerScreen = () => {
  return (
    <View style={styles.content}>
      <View style={styles.dieContainer}>
        <DieContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1, backgroundColor: 'black', alignItems: 'center' },
  dieContainer: {
    flex: 1,
  },
});
