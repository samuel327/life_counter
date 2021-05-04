import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export const PlayersGrid = () => {
  return (
    <View style={styles.content}>
      <View style={{ flex: 1, backgroundColor: 'blue', flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'orange' }}>
          <Text>Player 1</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'purple' }}>
          <Text>Player 2</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green', flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text>Player 3</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <Text style={{ color: 'white' }}>Player 4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1, height: '100%', width: '100%' },
});
