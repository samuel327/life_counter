import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Player } from '../../screens/ActivePlayersScreen';

interface ThreePlayerProps {
  players: Player[];
  setPlayers: Function;
  showDice: Function;
}
export const ThreePlayer = (props: ThreePlayerProps) => {
  const { players, setPlayers, showDice } = props;

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
    <View style={styles.board}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Player 1</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Player 2</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Player 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 70,
  },
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
    // backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
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
  // text: {
  //   fontSize: 70,
  // },
  middleOptionsView: {
    alignItems: 'center',
    zIndex: 15,
    backgroundColor: 'black',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});
