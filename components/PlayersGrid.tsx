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
            <View
              style={{
                transform: [{ rotate: '90deg' }],
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button title='-1' onPress={() => {}} />
              <Button title='-5' onPress={() => {}} />
              <Text
                style={{
                  ...styles.text,
                  ...{},
                }}
              >
                {players?.[0]?.health}
              </Text>
              <Button title='+1' onPress={() => {}} />
              <Button title='+5' onPress={() => {}} />
            </View>
          </View>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'white' } }}
          >
            <View
              style={{
                transform: [{ rotate: '-90deg' }],
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button title='-1' onPress={() => {}} />
              <Button title='-5' onPress={() => {}} />
              <Text
                style={{
                  ...styles.text,
                  ...{},
                }}
              >
                {players?.[1]?.health}
              </Text>
              <Button title='+1' onPress={() => {}} />
              <Button title='+5' onPress={() => {}} />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: 'silver' }}>
          <TouchableOpacity>
            <Foundation name='die-four' size={50} />
          </TouchableOpacity>
        </View>

        <View style={styles.half}>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'green' } }}
          >
            <View
              style={{
                transform: [{ rotate: '90deg' }],
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button title='-1' onPress={() => {}} />
              <Button title='-5' onPress={() => {}} />
              <Text
                style={{
                  ...styles.text,
                  ...{},
                }}
              >
                {players?.[2]?.health}
              </Text>
              <Button title='+1' onPress={() => {}} />
              <Button title='+5' onPress={() => {}} />
            </View>
          </View>
          <View
            style={{ ...styles.playerSpace, ...{ backgroundColor: 'red' } }}
          >
            <View
              style={{
                transform: [{ rotate: '-90deg' }],
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button title='-1' onPress={() => {}} />
              <Button title='-5' onPress={() => {}} />
              <Text
                style={{
                  ...styles.text,
                  ...{},
                }}
              >
                {players?.[3]?.health}
              </Text>
              <Button title='+1' onPress={() => {}} />
              <Button title='+5' onPress={() => {}} />
            </View>
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
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'silver',
  },
  half: { flex: 1, flexDirection: 'row' },

  playerSpace: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 70,
  },
});
