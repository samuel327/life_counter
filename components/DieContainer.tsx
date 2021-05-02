import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { Foundation } from '@expo/vector-icons';

export const DieContainer = () => {
  const [dieState, setDieState] = useState<number>(20);

  function handleRoll() {
    setDieState(() => {
      let num = Math.floor(Math.random() * 20 + 1);
      return num;
    });
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.text}>{dieState}</Text>
      <Pressable
        onPress={() => {
          handleRoll();
        }}
      >
        <Foundation name="die-four" size={40} color="white" />
      </Pressable>
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
