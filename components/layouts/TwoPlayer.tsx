import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '../CustomButton';
import { Foundation } from '@expo/vector-icons';
import { Player } from '../../screens/ActivePlayersScreen';

interface TwoPlayerProps {
  players: Player[];
  showDice: Dispatch<SetStateAction<boolean>>;
  updateLifeTotal: Function;
}
export const TwoPlayer = (props: TwoPlayerProps) => {
  const { players, showDice, updateLifeTotal } = props;

  return (
    <View style={styles.board}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          transform: [{ rotate: '180deg' }],
          flexDirection: 'row',
          marginBottom: -30,
          marginTop: 30,
        }}
      >
        <View style={{ margin: 10 }}>
          <CustomButton color={'red'} onPress={() => updateLifeTotal(1, -1)}>
            -1
          </CustomButton>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <CustomButton color={'red'} onPress={() => updateLifeTotal(1, -5)}>
            -5
          </CustomButton>
        </View>
        <Text style={styles.text}>{players?.[0]?.health}</Text>
        <View style={{ marginHorizontal: 10 }}>
          <CustomButton color={'black'} onPress={() => updateLifeTotal(1, 1)}>
            +1
          </CustomButton>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <CustomButton color={'black'} onPress={() => updateLifeTotal(1, 5)}>
            +5
          </CustomButton>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.middleOptionsView}>
          <TouchableOpacity
            onPress={() => {
              showDice(true);
            }}
          >
            <Foundation name="die-four" size={70} color="silver" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          flexDirection: 'row',
          marginTop: -30,
          zIndex: -1,
          marginBottom: 30,
        }}
      >
        <View style={{ margin: 10 }}>
          <CustomButton color={'green'} onPress={() => updateLifeTotal(2, -1)}>
            -1
          </CustomButton>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <CustomButton color={'green'} onPress={() => updateLifeTotal(2, -5)}>
            -5
          </CustomButton>
        </View>
        <Text style={styles.text}>{players?.[1]?.health}</Text>
        <CustomButton color={'black'} onPress={() => updateLifeTotal(2, 1)}>
          +1
        </CustomButton>
        <View style={{ marginHorizontal: 10 }}>
          <CustomButton color={'black'} onPress={() => updateLifeTotal(2, 5)}>
            +5
          </CustomButton>
        </View>
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
