import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '../CustomButton';
import { Foundation } from '@expo/vector-icons';
import { Player } from '../../screens/ActivePlayersScreen';
import React from 'react';

interface FourPlayerGridProps {
  players: any;
  setPlayers: any;
  showDice: any;
}
export const FourPlayer = (props: FourPlayerGridProps) => {
  const { players, setPlayers, showDice } = props;

  function updateLifeTotal(playerNumber: number, by: number) {
    setPlayers((prev: Player[]) => {
      let cpy = [...prev];

      cpy = cpy.map((player: Player, index: number) => {
        if (player.player === playerNumber) {
          player.health = player.health + by;
        }
        return player;
      });
      return cpy;
    });
  }

  return (
    <View style={styles.board}>
      <View style={styles.half}>
        <View
          style={{ ...styles.playerSpaceTop, ...{ backgroundColor: 'blue' } }}
        >
          <View
            style={{
              transform: [{ rotate: '90deg' }],
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
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
          style={{
            ...styles.playerSpaceTop,
            ...{ backgroundColor: 'white' },
          }}
        >
          <View
            style={{
              transform: [{ rotate: '-90deg' }],
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ margin: 10 }}>
              <CustomButton
                color={'red'}
                onPress={() => updateLifeTotal(2, -1)}
              >
                -1
              </CustomButton>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'red'}
                onPress={() => updateLifeTotal(2, -5)}
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
              {players?.[1]?.health}
            </Text>
            <CustomButton color={'black'} onPress={() => updateLifeTotal(2, 1)}>
              +1
            </CustomButton>
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'black'}
                onPress={() => updateLifeTotal(2, 5)}
              >
                +5
              </CustomButton>
            </View>
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
          <View
            style={{
              transform: [{ rotate: '90deg' }],
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'red'}
                onPress={() => updateLifeTotal(3, -1)}
              >
                -1
              </CustomButton>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'red'}
                onPress={() => updateLifeTotal(3, -5)}
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
              {players?.[2]?.health}
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'black'}
                onPress={() => updateLifeTotal(3, 1)}
              >
                +1
              </CustomButton>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'black'}
                onPress={() => updateLifeTotal(3, 5)}
              >
                +5
              </CustomButton>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.playerSpaceBottom,
            ...{ backgroundColor: 'red' },
          }}
        >
          <View
            style={{
              transform: [{ rotate: '-90deg' }],
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'white'}
                onPress={() => updateLifeTotal(4, -1)}
              >
                -1
              </CustomButton>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'white'}
                onPress={() => updateLifeTotal(4, -5)}
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
              {players?.[3]?.health}
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'white'}
                onPress={() => updateLifeTotal(4, 1)}
              >
                +1
              </CustomButton>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <CustomButton
                color={'white'}
                onPress={() => updateLifeTotal(4, 5)}
              >
                +5
              </CustomButton>
            </View>
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
});
