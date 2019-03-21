import { ActionReducerMap } from '@ngrx/store';
import { CounterState, counterReducer } from './counter';

export interface RootState {
  readonly counter: CounterState;
}

export const reducers: ActionReducerMap<RootState> = {
  counter: counterReducer
};

export * from './counter';
