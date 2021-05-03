import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { AppColors } from '../constants/AppColors';
import { Ionicons } from '@expo/vector-icons';

interface StatusContainerProps {
  playerNumber: number;
}
export const StatusContainer = (props: StatusContainerProps) => {
  const { playerNumber } = props;

  const [lifeStatus, setLifeStatus] = useState<number>(40);

  function updateLifeTotal(by: number) {
    setLifeStatus((prev: number) => {
      return prev + by;
    });
  }

  function getLifeTotalStyles() {
    let baseStyle = styles.lifeTotal;
    if (lifeStatus <= 10) {
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
        <Text style={getLifeTotalStyles()}>{lifeStatus}</Text>
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
