import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Player } from '../screens/ActivePlayersScreen';
import { Foundation } from '@expo/vector-icons';
interface PlayersGrid {
  players: Player[];
}
export const PlayersGrid = (props: PlayersGrid) => {
  const { players } = props;

  function fourPlayerFormat() {
    return (
      <>
        <View style={styles.half}>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'blue' } }}
          >
            <Text style={styles.text}>{players?.[0]?.health}</Text>
          </View>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'orange' } }}
          >
            <Text style={styles.text}>{players?.[1]?.health}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: 'silver' }}>
          <TouchableOpacity>
            <Foundation name='die-four' size={50} />
          </TouchableOpacity>
        </View>

        <View style={styles.half}>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'gold' } }}
          >
            <Text style={styles.text}>{players?.[2]?.health}</Text>
          </View>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'red' } }}
          >
            <Text style={styles.text}>{players?.[3]?.health}</Text>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.content}>
      {players.length === 4 && fourPlayerFormat()}
      {players.length < 4 && (
        <View>
          <Text>Unsupporterd format</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1, height: '100%', width: '100%' },
  half: { flex: 1, flexDirection: 'row' },

  playerSpace: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});
