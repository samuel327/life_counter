import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { DieContainer } from '../components/DieContainer';
import { StatusBar } from 'expo-status-bar';
import { StatusContainer } from '../components/StatusContainer';
import { Ionicons } from '@expo/vector-icons';
export default function ActivePlayersScreen() {
  const [numberOfPlayers, setNumberOfPlayers] = useState<number[]>([]);

  useEffect(() => {}, [numberOfPlayers]);

  function displayStatusContainers() {
    return numberOfPlayers.map((player: number, index: number) => {
      return (
        <TouchableOpacity onLongPress={removePlayer} key={index}>
          <StatusContainer playerNumber={player} />
        </TouchableOpacity>
      );
    });
  }

  function addPlayer() {
    if (numberOfPlayers.length + 1 <= 4) {
      setNumberOfPlayers((prev: number[]) => {
        let cpy = [...prev];
        let lastEl = cpy[prev.length - 1] || 0;
        return cpy.concat(lastEl + 1);
      });
    }
  }

  function removePlayer() {
    setNumberOfPlayers((prev: number[]) => {
      let cpy = [...prev];
      cpy.pop();
      return cpy;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <StatusBar style='auto' />
      <View style={styles.btns}>
        <TouchableOpacity onPress={addPlayer}>
          <Ionicons name='add' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.statusView}>{displayStatusContainers()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 20,
  },
  statusView: {
    height: 500,
  },
  btns: {
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
