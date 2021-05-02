import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

interface StatusContainerProps {
  playerNumber: number;
}
export const StatusContainer = (props: StatusContainerProps) => {
  const { playerNumber } = props;

  const [lifeStatus, setLifeStatus] = useState<number>(40);

  function minusOne() {
    setLifeStatus((prev: number) => {
      return prev - 1;
    });
  }

  function updateLifeTotal(by: number) {
    setLifeStatus((prev: number) => {
      return prev + by;
    });
  }
  return (
    <View style={{ height: 100, backgroundColor: 'silver', margin: 5 }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 8,
          marginLeft: 8,
          alignItems: 'center',
        }}
      >
        <Pressable style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons
            name="settings"
            size={20}
            color="black"
            onPress={() => {
              console.log('Pressed!');
            }}
          />
        </Pressable>
        <Text
          style={{ textAlign: 'center', marginLeft: 10, alignItems: 'center' }}
        >
          {playerNumber}
        </Text>
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
        <Text style={{ fontSize: 50 }}>{lifeStatus}</Text>
        <Button title={'+1'} onPress={() => updateLifeTotal(1)} />
        <Button title={'+5'} onPress={() => updateLifeTotal(5)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 100,
    margin: 5,
  },
});
