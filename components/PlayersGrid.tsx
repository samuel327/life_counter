import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DiceModal } from './modals/DiceModal';
import { FourPlayer } from './layouts/FourPlayer';
import { Player } from '../screens/ActivePlayersScreen';
import { ThreePlayer } from './layouts/ThreePlayer';
import { TwoPlayer } from '../components/layouts/TwoPlayer';

interface PlayersGrid {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}
export const PlayersGrid = (props: PlayersGrid) => {
  const { players, setPlayers } = props;

  const [diceModalVisible, setDiceModalVisible] = useState<boolean>(false);

  function updateLifeTotal(playerNumber: number, by: number) {
    setPlayers((prev: Player[]) => {
      let cpy = [...prev];

      cpy = cpy.map((player: Player, index: number) => {
        if (player.player === playerNumber) {
          player.health = player.health + by;
        }
        return player;
      });
      return cpy;
    });
  }

  return (
    <View style={styles.content}>
      {players.length === 4 && (
        <FourPlayer
          players={players}
          setPlayers={setPlayers}
          showDice={setDiceModalVisible}
          updateLifeTotal={updateLifeTotal}
        />
      )}
      {players.length === 3 && (
        <ThreePlayer
          players={players}
          setPlayers={setPlayers}
          showDice={setDiceModalVisible}
          updateLifeTotal={updateLifeTotal}
        />
      )}
      {players.length === 2 && (
        <TwoPlayer
          players={players}
          setPlayers={setPlayers}
          showDice={setDiceModalVisible}
          updateLifeTotal={updateLifeTotal}
        />
      )}
      {players.length !== 4 && players.length !== 2 && players.length !== 3 && (
        <View>
          <Text style={{ color: 'white' }}>Unsupported format</Text>
        </View>
      )}
      {diceModalVisible && (
        <DiceModal
          visible={diceModalVisible}
          setDiceModalVisible={setDiceModalVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '99%',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  half: { flex: 1, flexDirection: 'row' },
  playerSpaceTop: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 15,
    marginHorizontal: 5,
    marginBottom: -35,
  },

  playerSpaceBottom: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 15,
    marginHorizontal: 5,
    marginTop: -35,
  },
  text: {
    fontSize: 70,
  },
  middleOptionsView: {
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: 'black',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});
