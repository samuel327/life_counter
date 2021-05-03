import * as _ from 'lodash';

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { AppColors } from '../constants/AppColors';
import { CustomButton } from './CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { Player } from '../screens/ActivePlayersScreen';

interface StatusContainerProps {
  playerNumber: number;
  health: number;
  setPlayers: Function;
  sort: Function;
}
export const StatusContainer = (props: StatusContainerProps) => {
  const { playerNumber, health, setPlayers, sort } = props;

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
      // let sorted = _.sortBy(cpy, (o: Player) => o.health).reverse();

      // return sorted;
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
          <Ionicons name="settings" size={20} color="grey" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <CustomButton onPress={() => updateLifeTotal(-1)} color="red">
          -1
        </CustomButton>

        <CustomButton onPress={() => updateLifeTotal(-1)} color="red">
          -5
        </CustomButton>
        <Text style={getLifeTotalStyles()}>{health}</Text>

        <CustomButton onPress={() => updateLifeTotal(-1)} color="black">
          +1
        </CustomButton>

        <CustomButton onPress={() => updateLifeTotal(-1)} color="black">
          +5
        </CustomButton>
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
