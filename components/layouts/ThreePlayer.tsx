import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Player } from '../../screens/ActivePlayersScreen';
import { Foundation } from '@expo/vector-icons';
import { CustomButton } from '../CustomButton';
interface ThreePlayerProps {
  players: Player[];
  setPlayers: Function;
  showDice: Function;
}
export const ThreePlayer = (props: ThreePlayerProps) => {
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
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          marginBottom: -30,
          width: '98%',
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'yellow',
            marginRight: 10,

            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              transform: [{ rotate: '90deg' }],
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
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
            <View style={{ margin: 10 }}>
              <CustomButton
                color={'red'}
                onPress={() => updateLifeTotal(1, -5)}
              >
                -5
              </CustomButton>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={styles.text}>{players?.[0]?.health}</Text>
            </View>
            <View style={{ margin: 10 }}>
              <CustomButton
                color={'black'}
                onPress={() => updateLifeTotal(1, 1)}
              >
                +1
              </CustomButton>
            </View>
            <View style={{ margin: 10 }}>
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
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'green',
            marginLeft: 10,

            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              transform: [{ rotate: '-90deg' }],
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ ...styles.text, ...{ textAlign: 'center' } }}>
              {players?.[1]?.health}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.middleOptionsView}>
          <TouchableOpacity
            onPress={() => {
              showDice(true);
            }}
          >
            <Foundation name='die-four' size={70} color='silver' />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
          width: '98%',
          marginTop: -30,
          zIndex: -1,
          marginBottom: 15,
          borderRadius: 20,
        }}
      >
        <Text style={styles.text}>{players?.[2]?.health}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 70,
  },
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
    // backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
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
  // text: {
  //   fontSize: 70,
  // },
  middleOptionsView: {
    alignItems: 'center',
    zIndex: 15,
    backgroundColor: 'black',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});
