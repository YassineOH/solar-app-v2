import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

import type State from '@types';
import { Coords, ProjectType as PrjType } from '@types';

import reducer from './reducer';
import { ParametersSim, SimulationResult } from '../types/context';

const initialState: State = {
  projectType: null,
  isFetching: false,
  coords: {
    lat: 33.91770569103704,
    lng: -6.830671924014748,
  },
  parametersSim: {
    electricityProvider: 'onee',
    networkType: 'bt',
    structureType: 'frame',
    monthlyBill: null,
    withStorage: false,
  },
  currentStep: 1,
  result: {
    co2: 0,
    peakPower: 0,
    yearlyProduction: 0,
    yearlyYield: 0,
    yearlySaving: 0,
  },
  requestClientResponse: null,
};

export interface AppContextType extends State {
  setProjectType: (type: PrjType) => void;
  setCoords: (coords: Coords) => void;
  setParamsSim: (params: ParametersSim) => void;
  setCurrentStep: (step: 1 | 2 | 3 | 4) => void;
  setResult: (result: SimulationResult) => void;
  setIsFetching: (arg: boolean) => void;
  setClientRequestResponse: (value: 'fail' | 'success') => void;
}
const AppContext = createContext<AppContextType | null>(null);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setProjectType = (type: PrjType) => {
    dispatch({ type: 'SET_PROJECT_TYPE', payload: { projectType: type } });
  };

  const setCoords = (coords: Coords) => {
    dispatch({ type: 'SET_COORDS', payload: { coords } });
  };

  const setParamsSim = (paramsSim: ParametersSim) => {
    dispatch({ type: 'SET_SIM_PARAMS', payload: { parametersSim: paramsSim } });
  };

  const setCurrentStep = (currentStep: 1 | 2 | 3 | 4) => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: { currentStep } });
  };

  const setResult = (result: SimulationResult) => {
    dispatch({ type: 'SET_RESULT', payload: { result } });
  };

  const setIsFetching = (isFetch: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: isFetch });
  };

  const setClientRequestResponse = (response: 'fail' | 'success') => {
    dispatch({ type: 'SET_CLIENT_REQUEST_RESPONSE', payload: response });
  };

  const memorizedState = useMemo(
    () => ({
      ...state,
      setProjectType,
      setCoords,
      setParamsSim,
      setCurrentStep,
      setResult,
      setIsFetching,
      setClientRequestResponse,
    }),
    [state]
  );

  return (
    <AppContext.Provider value={memorizedState}>{children}</AppContext.Provider>
  );
}
export default ContextProvider;

export const useGlobalContext = () => useContext(AppContext);
