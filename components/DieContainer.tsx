import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import React, { useRef, useState } from 'react';

import { Foundation } from '@expo/vector-icons';

export const DieContainer = () => {
  const [dieState, setDieState] = useState<number>(20);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [spinValue, setSpinValue] = useState(new Animated.Value(0));
  let roll = useRef<any>(null);

  function handleRoll() {
    setDieState(() => {
      let num = Math.floor(Math.random() * 20 + 1);
      return num;
    });
  }

  function rollDie() {
    // First set up animation
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start(() => {
      setSpinValue(new Animated.Value(0));
    });
  }

  function startRolling() {
    roll.current = setInterval(function () {
      handleRoll();
    }, 50);
  }

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.content}>
      <View style={styles.diceView}>
        <Animated.View
          style={{ ...styles.dieStyles, ...{ transform: [{ rotate: spin }] } }}
        >
          <Text style={styles.text}>{dieState}</Text>
        </Animated.View>
      </View>
      <View style={styles.dieButton}>
        <TouchableOpacity
          disabled={isRolling ? true : false}
          onPress={() => {
            setIsRolling(true);
            startRolling();
            rollDie();
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
    color: 'white',
  },
  dieButton: { alignItems: 'center' },
});
