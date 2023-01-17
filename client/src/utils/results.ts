/* eslint-disable array-callback-return */
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHandHoldingDollar,
  faSeedling,
  faSun,
  faSolarPanel,
} from '@fortawesome/free-solid-svg-icons';
import type { SimulationResult } from '@types';

interface ResultProps {
  icon: IconDefinition;
  label: string;
  unit: string;
  value: number;
}

const oneProps = (key: keyof SimulationResult, value: number): ResultProps => {
  switch (key) {
    case 'yearlyProduction':
      return {
        icon: faSun,
        label: 'production solaire annuelle',
        unit: 'kWh',
        value,
      };

    case 'yearlySaving':
      return {
        icon: faHandHoldingDollar,
        label: 'épargne annuelle',
        unit: 'MAD',
        value,
      };

    case 'co2':
      return {
        icon: faSeedling,
        label: 'émission de co2 évitée',
        unit: 'To',
        value,
      };

    case 'peakPower':
      return {
        icon: faSolarPanel,
        label: "la taille de l'installation solaire",
        unit: 'kWc',
        value,
      };
    default:
      return {
        icon: faHandHoldingDollar,
        label: 'production solaire annuelle',
        unit: 'kWh',
        value,
      };
  }
};

const resultsArray = (results: SimulationResult): ResultProps[] => {
  const keys: (keyof SimulationResult)[] = [
    'yearlyProduction',
    'yearlySaving',
    'co2',
    'peakPower',
  ];

  const array = keys.map((key) => oneProps(key, results[key] as number));

  return array;
};

export default resultsArray;
