import type {
  ElectricityProvider,
  NetworkType,
  SelectOption,
  StructureType,
} from '@types';

export const electricityProvider: SelectOption<ElectricityProvider>[] = [
  {
    text: 'ONEE',
    value: 'onee',
  },
  {
    text: 'REDAL',
    value: 'redal',
  },
  {
    text: 'LYDEC',
    value: 'lydec',
  },
  {
    text: 'AMENDIS',
    value: 'amendis',
  },
  {
    text: 'RADEM',
    value: 'radem',
  },
];

export const networkType: SelectOption<NetworkType>[] = [
  {
    text: 'Moyen Tension',
    value: 'mt',
  },
  {
    text: 'Basse Tension',
    value: 'bt',
  },
];

export const structureType: SelectOption<StructureType>[] = [
  {
    text: 'toiture / terrain',
    value: 'roof',
  },
  {
    text: 'ombrière',
    value: 'parking',
  },
  {
    text: 'charpente',
    value: 'frame',
  },
];

export default { structureType, electricityProvider, networkType };
