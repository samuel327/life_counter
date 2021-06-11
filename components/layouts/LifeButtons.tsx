import { CustomButton } from '../CustomButton';
import React from 'react';
import { Text } from 'react-native';

interface LifeButtonsProps {
  playerNumber: number;
  health: number;
  updateLifeTotal: Function;
}

export const LifeButtons = (props: LifeButtonsProps) => {
  const { updateLifeTotal, health, playerNumber } = props;

  const healthModifiers = [-1, -5, 1, 5];
  return (
    <>
      {healthModifiers.map((modifier: number, index: number) => {
        if (index + 1 === healthModifiers.length / 2) {
          return (
            <>
              <CustomButton
                color={modifier < 0 ? 'red' : 'black'}
                onPress={() => updateLifeTotal(playerNumber, modifier)}
              >
                {modifier}
              </CustomButton>
              <Text style={{ fontSize: 70 }}>{health.toString()}</Text>
            </>
          );
        } else {
          return (
            <CustomButton
              color={modifier < 0 ? 'red' : 'black'}
              onPress={() => updateLifeTotal(playerNumber, modifier)}
            >
              {modifier < 0 ? '' : '+'}
              {modifier}
            </CustomButton>
          );
        }
      })}
    </>
  );
};
