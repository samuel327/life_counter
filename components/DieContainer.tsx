import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

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
    color: 'white',
  },
});
