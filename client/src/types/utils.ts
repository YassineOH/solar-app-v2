import { ProjectType } from '@types';

export interface Option {
  img: string;
  text: string;
  value: ProjectType;
}

export interface Info {
  info: string;
  id: string;
}

export interface SelectOption<T> {
  text: string;
  value: T;
}

export interface Client {
  firstName: string;
  lastName: string;
  address: string;
  tel: string;
  email: string;
  business: string | null;
}
