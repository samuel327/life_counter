import {
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StatusContainer } from '../components/StatusContainer';
import { Ionicons } from '@expo/vector-icons';
import * as _ from 'lodash';
export interface Player {
  player: number;
  health: number;
}
export default function ActivePlayersScreen() {
  const [players, setPlayers] = useState<Player[]>([]);

  function sort() {
    setPlayers((prev: Player[]) => {
      let sorted = _.sortBy(prev, (o: Player) => o.health).reverse();
      return sorted;
    });
  }

  function displayStatusContainers() {
    return players.map((player: Player, index: number) => {
      return (
        <TouchableOpacity onLongPress={() => removePlayer(player)} key={index}>
          <StatusContainer
            playerNumber={player?.player}
            health={player?.health}
            setPlayers={setPlayers}
            sort={sort}
          />
        </TouchableOpacity>
      );
    });
  }

  function addPlayer() {
    if (players.length + 1 <= 6) {
      setPlayers((prev: any[]) => {
        return prev.concat({
          player: prev.length + 1,
          health: 40,
        });
      });
    }
  }

  function removePlayer(playerToDelete: Player) {
    setPlayers((prev: any[]) => {
      let cpy = [...prev];
      cpy = cpy.filter((player: Player, index: number) => {
        if (player.player !== playerToDelete.player) {
          return player;
        }
      });
      cpy = cpy.map((player: Player, index: number) => {
        let updatedPlayer: Player = {
          player: index + 1,
          health: player.health,
        };
        return updatedPlayer;
      });
      return cpy;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <StatusBar style='auto' />
      <View style={styles.btns}>
        {/* <Button title='Sort' onPress={() => sort()} /> */}
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
