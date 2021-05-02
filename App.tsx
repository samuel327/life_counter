import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DieContainer } from './components/DieContainer';
import { StatusContainer } from './components/StatusContainer';

export default function App() {
  const [numberOfPlayers, setNumberOfPlayers] = useState<number[]>([]);

  useEffect(() => {}, [numberOfPlayers]);

  function displayStatusContainers() {
    return numberOfPlayers.map((player: number) => {
      return <StatusContainer playerNumber={player} />;
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <StatusBar style='auto' />
      {displayStatusContainers()}
      <View style={styles.btns}>
        <Button
          title={'-'}
          onPress={() => {
            console.log('MINUS A CONTAINER');
            setNumberOfPlayers((prev: number[]) => {
              let cpy = [...prev];
              console.log('CPY: ', cpy);
              let lastEl = cpy[prev.length - 1] || 0;
              cpy.pop();
              return cpy;
            });
          }}
        />
        <Button
          title={'+'}
          onPress={() => {
            console.log('ADDING CONTAINER');
            setNumberOfPlayers((prev: number[]) => {
              let cpy = [...prev];
              console.log('CPY: ', cpy);
              let lastEl = cpy[prev.length - 1] || 0;
              return cpy.concat(lastEl + 1);
            });
          }}
        />
      </View>
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
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dieContainer: {
    flex: 1,

    justifyContent: 'flex-end',
  },
});
