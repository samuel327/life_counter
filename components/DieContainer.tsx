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
      <View style={styles.textView}>
        <View style={styles.textInnerView}>
          <Text style={styles.text}>{dieState}</Text>
        </View>
      </View>
      <View style={styles.diceView}>
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
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInnerView: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 120,
    //color: 'white',

    // height: 300,
    // width: 300,
    // backgroundColor: 'blue',
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  diceView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
