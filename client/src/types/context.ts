export interface State {
  projectType: ProjectType;
  coords: Coords;
  parametersSim: ParametersSim;
  currentStep: 1 | 2 | 3 | 4;
  result: SimulationResult;
  isFetching: boolean;
  requestClientResponse: 'fail' | 'success' | null;

  // setters
}

export type ProjectType =
  | 'pumping'
  | 'industry'
  | 'domestic'
  | 'commercial'
  | null;

export interface Coords {
  lat: number;
  lng: number;
}

export interface ParametersSim {
  structureType: StructureType;
  electricityProvider: ElectricityProvider;
  networkType: NetworkType;
  monthlyBill: number | null;
  withStorage: boolean;
}

export interface SimulationResult {
  yearlyYield: number;
  peakPower: number;
  co2: number;
  yearlyProduction: number;
  yearlySaving: number;
}

export type StructureType = 'roof' | 'parking' | 'frame';
export type ElectricityProvider =
  | 'onee'
  | 'redal'
  | 'lydec'
  | 'amendis'
  | 'radem';
export type NetworkType = 'mt' | 'bt';
