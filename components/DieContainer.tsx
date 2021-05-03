import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';

import { Foundation } from '@expo/vector-icons';

export const DieContainer = () => {
  const [dieState, setDieState] = useState<number>(20);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  let roll = useRef<any>(null);

  function handleRoll() {
    setDieState(() => {
      let num = Math.floor(Math.random() * 20 + 1);
      return num;
    });
  }

  function startRolling() {
    roll.current = setInterval(function () {
      handleRoll();
    }, 50);
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.text}>{dieState}</Text>
      <TouchableOpacity
        disabled={isRolling ? true : false}
        onPress={() => {
          setIsRolling(true);
          startRolling();
          setTimeout(function () {
            clearInterval(roll.current);
            setIsRolling(false);
          }, 500);
        }}
      >
        <Foundation
          name='die-four'
          size={40}
          color={isRolling ? 'grey' : 'white'}
        />
      </TouchableOpacity>
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
