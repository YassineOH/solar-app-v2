import { Reducer } from 'react';
import type State from '../types';

type ActionType =
  | 'SET_COORDS'
  | 'SET_PROJECT_TYPE'
  | 'SET_SIM_PARAMS'
  | 'SET_CURRENT_STEP'
  | 'SET_RESULT'
  | 'SET_LOADING'
  | 'SET_CLIENT_REQUEST_RESPONSE';

interface Action {
  type: ActionType;
  payload?: any;
}

const reducer: Reducer<State, Action> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_COORDS':
      return {
        ...state,
        coords: payload.coords,
      };

    case 'SET_PROJECT_TYPE':
      return {
        ...state,
        projectType: payload.projectType,
      };

    case 'SET_SIM_PARAMS':
      return {
        ...state,
        parametersSim: payload.parametersSim,
      };

    case 'SET_CURRENT_STEP':
      return {
        ...state,
        currentStep: payload.currentStep,
      };

    case 'SET_RESULT':
      return {
        ...state,
        result: payload.result,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isFetching: payload,
      };

    case 'SET_CLIENT_REQUEST_RESPONSE':
      return {
        ...state,
        requestClientResponse: payload,
      };

    default:
      return state;
  }
};

export default reducer;
