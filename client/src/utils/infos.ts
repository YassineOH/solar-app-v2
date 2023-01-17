import type { Info, ProjectType } from '../types';

const infosDomestic: Info[] = [
  {
    info: 'Lorem ipsum dolor sit amet, domestic',
    id: '1',
  },
  {
    info: 'Lorem ipsum dolor sit amet, domestic',
    id: '2',
  },
  {
    info: 'Lorem ipsum dolor sit amet, domestic',
    id: '3',
  },
  {
    info: 'Lorem ipsum dolor sit amet, domestic',
    id: '4',
  },
];

const infosCommercial: Info[] = [
  {
    info: 'Lorem ipsum dolor sit amet, Commercial',
    id: '1',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Commercial',
    id: '2',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Commercial',
    id: '3',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Commercial',
    id: '4',
  },
];

const infosIndustry: Info[] = [
  {
    info: 'Lorem ipsum dolor sit amet, Industry',
    id: '1',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Industry',
    id: '2',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Industry',
    id: '3',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Industry',
    id: '4',
  },
];

const infosPump: Info[] = [
  {
    info: 'Lorem ipsum dolor sit amet, Pump',
    id: '1',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Pump',
    id: '2',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Pump',
    id: '3',
  },
  {
    info: 'Lorem ipsum dolor sit amet, Pump',
    id: '4',
  },
];

const infos = (type: ProjectType): Info[] => {
  switch (type) {
    case 'commercial':
      return infosCommercial;

    case 'domestic':
      return infosDomestic;

    case 'industry':
      return infosIndustry;

    case 'pumping':
      return infosPump;

    default:
      return infosDomestic;
  }
};

export default infos;
