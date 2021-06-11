import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Foundation } from '@expo/vector-icons';
import { LifeButtons } from './LifeButtons';
import { Player } from '../../screens/ActivePlayersScreen';
import React from 'react';

interface FourPlayerGridProps {
  players: Player[];
  showDice: any;
  updateLifeTotal: Function;
}
export const FourPlayer = (props: FourPlayerGridProps) => {
  const { players, showDice, updateLifeTotal } = props;

  return (
    <View style={styles.board}>
      <View style={styles.half}>
        <View
          style={{ ...styles.playerSpaceTop, ...{ backgroundColor: 'pink' } }}
        >
          <View style={styles.topLeft}>
            <LifeButtons
              health={players[0].health}
              updateLifeTotal={updateLifeTotal}
              playerNumber={players[0].player}
            />
          </View>
        </View>
        <View
          style={{
            ...styles.playerSpaceTop,
            ...{ backgroundColor: 'white' },
          }}
        >
          <View style={styles.topRight}>
            <LifeButtons
              health={players[1].health}
              updateLifeTotal={updateLifeTotal}
              playerNumber={players[1].player}
            />
          </View>
        </View>
      </View>
      <View style={styles.middleOptionsView}>
        <TouchableOpacity
          onPress={() => {
            showDice(true);
          }}
        >
          <Foundation name="die-four" size={70} color="silver" />
        </TouchableOpacity>
      </View>

      <View style={styles.half}>
        <View
          style={{
            ...styles.playerSpaceBottom,
            ...{ backgroundColor: 'green' },
          }}
        >
          <View style={styles.bottomLeft}>
            <LifeButtons
              health={players[2].health}
              updateLifeTotal={updateLifeTotal}
              playerNumber={players[2].player}
            />
          </View>
        </View>
        <View
          style={{
            ...styles.playerSpaceBottom,
            ...{ backgroundColor: 'red' },
          }}
        >
          <View style={styles.bottomRight}>
            <LifeButtons
              health={players[3].health}
              updateLifeTotal={updateLifeTotal}
              playerNumber={players[3].player}
            />
          </View>
        </View>
      </View>
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
    width: '100%',
    padding: 2,
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
  topLeft: {
    transform: [{ rotate: '90deg' }],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '180%',
  },
  topRight: {
    transform: [{ rotate: '-90deg' }],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '180%',
  },
  bottomLeft: {
    transform: [{ rotate: '90deg' }],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '180%',
  },
  bottomRight: {
    transform: [{ rotate: '-90deg' }],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '180%',
  },
});
