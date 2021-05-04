import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Player } from '../screens/ActivePlayersScreen';

interface PlayersGrid {
  players: Player[];
}
export const PlayersGrid = (props: PlayersGrid) => {
  const { players } = props;
  return (
    <View style={styles.content}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>{players?.[0]?.health}</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Player 2</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Player 3</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Player 4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1, height: '100%', width: '100%' },
});
