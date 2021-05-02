import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusContainerProps {
  playerNumber: number;
}
export const StatusContainer = (props: StatusContainerProps) => {
  const { playerNumber } = props;
  return (
    <View style={styles.content}>
      <Text>Player: {playerNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 100,
    margin: 5,
  },
});
