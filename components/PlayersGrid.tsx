import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CustomButton } from './CustomButton';
import { Foundation } from '@expo/vector-icons';
import { Player } from '../screens/ActivePlayersScreen';
import React from 'react';

interface PlayersGrid {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}
export const PlayersGrid = (props: PlayersGrid) => {
  const { players, setPlayers } = props;

  function updateLifeTotal(playerNumber: number, by: number) {
    setPlayers((prev: Player[]) => {
      let cpy = [...prev];
      //cpy[playerNumber - 1].health = health + by;
      cpy = cpy.map((player: Player, index: number) => {
        if (player.player === playerNumber) {
          player.health = player.health + by;
        }
        return player;
      });
      return cpy;
      // let sorted = _.sortBy(cpy, (o: Player) => o.health).reverse();

      // return sorted;
    });
  }

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
              {/* <Button
                title="-1"
                onPress={() => {
                  updateLifeTotal(1, -1);
                }}
              /> */}
              <View style={{ margin: 10 }}>
                <CustomButton
                  color={'red'}
                  onPress={() => updateLifeTotal(1, -1)}
                >
                  -1
                </CustomButton>
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <CustomButton
                  color={'red'}
                  onPress={() => updateLifeTotal(1, -5)}
                >
                  -5
                </CustomButton>
              </View>

              <Text
                style={{
                  ...styles.text,
                  ...{},
                }}
              >
                {players?.[0]?.health}
              </Text>

              <View style={{ marginHorizontal: 10 }}>
                <CustomButton
                  color={'black'}
                  onPress={() => updateLifeTotal(1, 1)}
                >
                  +1
                </CustomButton>
              </View>

              <View style={{ marginHorizontal: 10 }}>
                <CustomButton
                  color={'black'}
                  onPress={() => updateLifeTotal(1, 5)}
                >
                  +5
                </CustomButton>
              </View>
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
              <Button
                title="-1"
                onPress={() => {
                  updateLifeTotal(2, -1);
                }}
              />
              <Button
                title="-5"
                onPress={() => {
                  updateLifeTotal(2, -5);
                }}
              />
              <Text
                style={{
                  ...styles.text,
                  ...{},
                }}
              >
                {players?.[1]?.health}
              </Text>
              <Button
                title="+1"
                onPress={() => {
                  updateLifeTotal(2, 1);
                }}
              />
              <Button
                title="+5"
                onPress={() => {
                  updateLifeTotal(2, 5);
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: 'silver' }}>
          <TouchableOpacity>
            <Foundation name="die-four" size={50} />
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
              <Button
                title="-1"
                onPress={() => {
                  updateLifeTotal(3, -1);
                }}
              />
              <Button
                title="-5"
                onPress={() => {
                  updateLifeTotal(3, -5);
                }}
              />
              <Text
                style={{
                  ...styles.text,
                  ...{},
                }}
              >
                {players?.[2]?.health}
              </Text>
              <Button
                title="+1"
                onPress={() => {
                  updateLifeTotal(3, 1);
                }}
              />
              <Button
                title="+5"
                onPress={() => {
                  updateLifeTotal(3, 5);
                }}
              />
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
              <Button
                title="-1"
                onPress={() => {
                  updateLifeTotal(4, -1);
                }}
              />
              <Button
                title="-5"
                onPress={() => {
                  updateLifeTotal(4, -5);
                }}
              />
              <Text
                style={{
                  ...styles.text,
                  ...{},
                }}
              >
                {players?.[3]?.health}
              </Text>
              <Button
                title="+1"
                onPress={() => {
                  updateLifeTotal(4, 1);
                }}
              />
              <Button
                title="+5"
                onPress={() => {
                  updateLifeTotal(4, 5);
                }}
              />
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
