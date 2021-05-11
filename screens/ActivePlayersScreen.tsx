import * as _ from 'lodash';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LayoutModal } from '../components/modals/LayoutModal';
import { PlayersGrid } from '../components/PlayersGrid';
import { StatusBar } from 'expo-status-bar';
import { StatusContainer } from '../components/StatusContainer';
import { ChooseNumPlayers } from '../components/modals/ChooseNumPlayers';

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
  const [playerNumModalVisible, setPlayerNumModalVisible] = useState<boolean>(
    false
  );

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
        <StatusContainer
          playerNumber={player?.player}
          health={player?.health}
          setPlayers={setPlayers}
          sort={sort}
          key={index}
        />
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

  function LayoutBtns() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={styles.btns}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Feather name='layout' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPlayerNumModalVisible(true)}>
            <Image
              source={require('../assets/addUserIcon/icons8-add-user-male-30.png')}
              style={{
                backgroundColor: 'white',
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {layout === 'columnar' && (
        <>
          <View style={styles.header}></View>
          <StatusBar style='auto' />
          <LayoutBtns />
          <View style={styles.statusView}>{displayStatusContainers()}</View>
        </>
      )}
      {layout === 'grid' && (
        <View style={{ flex: 1 }}>
          <LayoutBtns />
          <PlayersGrid players={players} setPlayers={setPlayers} />
        </View>
      )}
      <LayoutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        setLayout={setLayout}
      />
      <ChooseNumPlayers
        visible={playerNumModalVisible}
        onClose={() => setPlayerNumModalVisible(false)}
        playerCount={players.length}
        setPlayers={setPlayers}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  header: {
    height: 100,
  },
  statusView: {
    height: 500,
  },
  btns: {
    marginVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
});
