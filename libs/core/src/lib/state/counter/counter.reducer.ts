import { CounterAction, CounterActionTypes } from './counter.actions';

export const COUNTER_FEATURE_KEY = 'counter';

/**
 * Interface for the 'Counter' data used in
 *  - CounterState, and
 *  - counterReducer
 *
 *  Note: replace if already defined in another module
 */

export interface CounterState {
  readonly total: number;
}

export interface CounterPartialState {
  readonly [COUNTER_FEATURE_KEY]: CounterState;
}

export const initialState: CounterState = {
  total: 0
};

export function counterReducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return {
        ...state,
        total: state.total + 1
      };

    case CounterActionTypes.Decrement:
      return {
        ...state,
        total: state.total - 1
      };

    case CounterActionTypes.ResetSuccess:
      return initialState;

    default: {
      return state;
    }
  }
}
