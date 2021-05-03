import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { AppColors } from '../constants/AppColors';
import { Ionicons } from '@expo/vector-icons';
import { Player } from '../screens/ActivePlayersScreen';

interface StatusContainerProps {
  playerNumber: number;
  health: number;
  setPlayers: Function;
}
export const StatusContainer = (props: StatusContainerProps) => {
  const { playerNumber, health, setPlayers } = props;

  function updateLifeTotal(by: number) {
    setPlayers((prev: Player[]) => {
      let cpy = [...prev];
      //cpy[playerNumber - 1].health = health + by;
      cpy = cpy.map((player: Player, index: number) => {
        if (player.player === playerNumber) {
          player.health = health + by;
        }
        return player;
      });

      return cpy;
    });
  }

  function getLifeTotalStyles() {
    let baseStyle = styles.lifeTotal;
    if (health <= 10) {
      baseStyle = { ...baseStyle, ...{ color: AppColors.danger } };
    } else {
      baseStyle = { ...baseStyle, ...{ color: AppColors.healthy } };
    }

    return baseStyle;
  }
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text>{playerNumber}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('Pressed!');
          }}
        >
          <Ionicons name='settings' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button title={'-1'} onPress={() => updateLifeTotal(-1)} />
        <Button title={'-5'} onPress={() => updateLifeTotal(-5)} />
        <Text style={getLifeTotalStyles()}>{health}</Text>
        <Button title={'+1'} onPress={() => updateLifeTotal(1)} />
        <Button title={'+5'} onPress={() => updateLifeTotal(5)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 100, backgroundColor: 'silver', margin: 5 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 100,
    margin: 5,
  },
  lifeTotal: { fontSize: 50 },
});
