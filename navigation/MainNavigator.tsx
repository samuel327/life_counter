import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivePlayersScreen from '../screens/ActivePlayersScreen';
import { DieRollerScreen } from '../screens/DieRollerScreen';
export const MainNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Game' component={ActivePlayersScreen} />
        <Tab.Screen name='Dice' component={DieRollerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
