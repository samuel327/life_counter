import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const DieContainer = () => {
  const [dieState, setDieState] = useState<number>(20);

  function handleRoll() {
    setDieState(() => {
      let num = Math.floor(Math.random() * 20 + 1);
      return num;
    });
  }

  return (
    <View>
      <Text style={styles.text}>{dieState}</Text>
      <Button
        title={'ROLL'}
        onPress={() => {
          handleRoll();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 120,
  },
});
