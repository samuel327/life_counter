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
    <View style={styles.content}>
      <View style={styles.diceView}>
        <View style={styles.dieStyles}>
          <Text style={styles.text}>{dieState}</Text>
        </View>
      </View>
      <View style={styles.dieButton}>
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
            size={80}
            color={isRolling ? 'grey' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  diceView: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  dieStyles: {
    //flex: 1,
    width: 200,
    height: 200,
    borderColor: 'white',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 120,
    color: 'blue',
  },
  dieButton: { alignItems: 'center' },
});
