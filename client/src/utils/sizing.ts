/* eslint-disable no-nested-ternary */
import {
  Coords,
  ElectricityProvider,
  NetworkType,
  ParametersSim,
  ProjectType,
  SimulationResult,
} from '@types';
import getYearlyProduction from '../services/solarCall';

export const electricityTariff = (
  networkType: NetworkType,
  provider: ElectricityProvider
): number => {
  if (networkType === 'bt') {
    switch (provider) {
      case 'lydec':
        return 1.5193;
      case 'onee':
        return 1.5958;
      case 'redal':
        return 1.45466;
      case 'amendis':
        return 1.5178;

      default:
        return 1.5958;
    }
  } else {
    switch (provider) {
      case 'lydec':
        return 0.9514;
      case 'onee':
        return 1.0101;
      case 'redal':
        return 0.92251;
      case 'amendis':
        return 0.99809;

      default:
        return 1.0101;
    }
  }
};

export const energyNeed = (
  bill: number,
  tariff: number,
  withStorage: boolean,
  projectType: ProjectType
): number => {
  if (projectType === 'domestic') {
    if (withStorage) {
      return (bill / tariff) * 1;
    }
    return (bill / tariff) * 0.4;
  }
  if (projectType === 'commercial') {
    return (bill / tariff) * 0.6;
  }

  if (projectType === 'industry') {
    return (bill / tariff) * (0.6 * 0.8);
  }

  return bill / tariff;
};

export const savingCO2 = (consumedEnergy: number) =>
  (consumedEnergy * 0.712) / 1000;

const startSimulation = async (
  params: ParametersSim,
  projet: ProjectType,
  coords: Coords
): Promise<SimulationResult> => {
  const {
    monthlyBill,
    networkType,
    electricityProvider,
    structureType,
    withStorage: storage,
  } = params;

  const tilt =
    structureType === 'roof' ? 30 : structureType === 'parking' ? 10 : 5;

  const bill = (monthlyBill as number) * 12;
  const tarif = electricityTariff(networkType, electricityProvider);
  const yearlyYield = await getYearlyProduction(coords.lat, coords.lng, tilt);

  const energy = energyNeed(bill, tarif, storage, projet);

  const peakPower = energy / yearlyYield;

  const yearlyProduction = peakPower * yearlyYield;

  const yearlySaving = yearlyProduction * tarif;

  const co2 = savingCO2(yearlyProduction);

  return {
    peakPower,
    yearlyProduction,
    yearlyYield,
    co2,
    yearlySaving,
  };
};

export default startSimulation;
