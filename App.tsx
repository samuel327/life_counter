import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { DieContainer } from './components/DieContainer';
import { StatusBar } from 'expo-status-bar';
import { StatusContainer } from './components/StatusContainer';

export default function App() {
  const [numberOfPlayers, setNumberOfPlayers] = useState<number[]>([]);

  useEffect(() => {}, [numberOfPlayers]);

  function displayStatusContainers() {
    return numberOfPlayers.map((player: number, index: number) => {
      return <StatusContainer playerNumber={player} key={index} />;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <StatusBar style="auto" />
      <View style={styles.btns}>
        <Button
          title={'-'}
          disabled={numberOfPlayers.length === 0 ? true : false}
          onPress={() => {
            console.log('MINUS A CONTAINER');
            setNumberOfPlayers((prev: number[]) => {
              let cpy = [...prev];
              cpy.pop();
              return cpy;
            });
          }}
        />
        <Button
          title={'+'}
          disabled={numberOfPlayers.length + 1 <= 4 ? false : true}
          onPress={() => {
            console.log('ADDING CONTAINER', numberOfPlayers.length);
            setNumberOfPlayers((prev: number[]) => {
              let cpy = [...prev];
              console.log('CPY: ', cpy);
              let lastEl = cpy[prev.length - 1] || 0;
              return cpy.concat(lastEl + 1);
            });
          }}
        />
      </View>
      <View style={styles.statusView}>{displayStatusContainers()}</View>

      <View style={styles.dieContainer}>
        <DieContainer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 100,
  },
  statusView: {
    height: 500,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dieContainer: {
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'flex-end',
  },
});
