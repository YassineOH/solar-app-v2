import house from '../assets/house.png';
import hotel from '../assets/hotel.png';
import factory from '../assets/factory.png';
import pump from '../assets/water-pump.png';

import type { Option } from '../types';

const projectOptions: Option[] = [
  {
    text: 'Domaine domestique',
    img: house,
    value: 'domestic',
  },
  {
    text: 'Domaine hôtellerie-commercial',
    img: hotel,
    value: 'commercial',
  },
  {
    text: 'Domaine industrielle',
    img: factory,
    value: 'industry',
  },
  {
    text: 'Pompage solaire',
    img: pump,
    value: 'pumping',
  },
];

export default projectOptions;
