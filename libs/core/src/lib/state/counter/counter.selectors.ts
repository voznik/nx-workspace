import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER_FEATURE_KEY, CounterState } from './counter.reducer';

// Lookup the 'Counter' feature state managed by NgRx
const getCounterState = createFeatureSelector<CounterState>(
  COUNTER_FEATURE_KEY
);

const getTotal = createSelector(
  getCounterState,
  (state: CounterState) => state.total
);


export const counterQuery = {
  getTotal,
};
