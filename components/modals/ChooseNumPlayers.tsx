import React, { Dispatch, SetStateAction } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Player } from '../../screens/ActivePlayersScreen';

interface ChooseNumPlayersProps {
  visible: boolean;
  onClose: Function;
  playerCount: number;
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}
export const ChooseNumPlayers = (props: ChooseNumPlayersProps) => {
  const { playerCount, visible, onClose, setPlayers } = props;
  return (
    <Modal visible={visible} style={{ backgroundColor: 'black' }}>
      <View
        style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}
      >
        <View
          style={{
            height: 100,
            justifyContent: 'center',
            backgroundColor: 'black',
          }}
        >
          <Text style={{ ...styles.text, ...{ textAlign: 'left' } }}>
            Number of players:
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.viewsContainer}>
            <TouchableOpacity
              onPress={() => {
                setPlayers([
                  { player: 1, health: 40 },
                  { player: 2, health: 40 },
                ]);
                onClose();
              }}
            >
              <View
                style={
                  playerCount === 2
                    ? {
                        ...styles.view,
                        ...styles.chosenPlayerCount,
                      }
                    : styles.view
                }
              >
                <Text style={styles.text}>2</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setPlayers([
                  { player: 1, health: 40 },
                  { player: 2, health: 40 },
                  { player: 3, health: 40 },
                ]);
                onClose();
              }}
            >
              <View
                style={
                  playerCount === 3
                    ? { ...styles.view, ...styles.chosenPlayerCount }
                    : styles.view
                }
              >
                <Text style={styles.text}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setPlayers([
                  { player: 1, health: 40 },
                  { player: 2, health: 40 },
                  { player: 3, health: 40 },
                  { player: 4, health: 40 },
                ]);
                onClose();
              }}
            >
              <View
                style={
                  playerCount === 4
                    ? { ...styles.view, ...styles.chosenPlayerCount }
                    : styles.view
                }
              >
                <Text style={styles.text}>4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => onClose()}>
            <View
              style={{
                width: 150,
                height: 70,
                borderWidth: 3,
                borderRadius: 20,
                borderColor: 'rgba(158, 150, 150, .5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={styles.text}>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  viewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  view: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(158, 150, 150, .5)',
    borderRadius: 20,
    borderWidth: 5,
    marginBottom: 150,
    marginHorizontal: 6,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  chosenPlayerCount: {
    backgroundColor: 'rgba(255,215,0,0.6)',
    borderColor: 'rgba(158, 150, 150, 1)',
  },
});
