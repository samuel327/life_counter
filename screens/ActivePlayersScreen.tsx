import {
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StatusContainer } from '../components/StatusContainer';
import { Ionicons } from '@expo/vector-icons';
import * as _ from 'lodash';
import { Feather } from '@expo/vector-icons';
import { LayoutModal } from '../components/modals/LayoutModal';
import { PlayersGrid } from '../components/PlayersGrid';
export interface Player {
  player: number;
  health: number;
}
export default function ActivePlayersScreen() {
  const [players, setPlayers] = useState<Player[]>([
    { player: 1, health: 40 },
    { player: 2, health: 40 },
    { player: 3, health: 40 },
    { player: 4, health: 40 },
  ]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [layout, setLayout] = useState<string>('columnar');

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
    if (players.length + 1 <= 4) {
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
      {layout === 'columnar' && (
        <>
          <View style={styles.header}></View>
          <StatusBar style='auto' />
          <View style={styles.btns}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Feather name='layout' size={24} color='black' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={addPlayer}
              disabled={players.length === 4 ? true : false}
            >
              <Ionicons
                name='add'
                size={24}
                color={players.length === 4 ? 'grey' : 'black'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.statusView}>{displayStatusContainers()}</View>
        </>
      )}
      {layout === 'grid' && (
        <View style={{ flex: 1 }}>
          <View style={styles.btns}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Feather name='layout' size={24} color='black' />
            </TouchableOpacity>
          </View>

          <PlayersGrid />
        </View>
      )}
      <LayoutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        setLayout={setLayout}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 100,
  },
  statusView: {
    height: 500,
  },
  btns: {
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
