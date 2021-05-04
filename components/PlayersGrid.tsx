import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Player } from '../screens/ActivePlayersScreen';

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
            <Text>{players?.[0]?.health}</Text>
          </View>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'orange' } }}
          >
            <Text>{players?.[1]?.health}</Text>
          </View>
        </View>
        <View style={styles.half}>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'gold' } }}
          >
            <Text>{players?.[2]?.health}</Text>
          </View>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'black' } }}
          >
            <Text style={{ color: 'white' }}>{players?.[3]?.health}</Text>
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
});
