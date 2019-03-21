import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Reset = '[Counter] Reset',
  ResetSuccess = '[Counter] ResetSucess'
}

export class IncrementAction implements Action {
  readonly type = CounterActionTypes.Increment;
}

export class DecrementAction implements Action {
  readonly type = CounterActionTypes.Decrement;
}

export class ResetAction implements Action {
  readonly type = CounterActionTypes.Reset;
}

export class ResetSuccessAction implements Action {
  readonly type = CounterActionTypes.ResetSuccess;
}

export type CounterAction =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | ResetSuccessAction;

export const fromCounterActions = {
  IncrementAction,
  DecrementAction,
  ResetAction,
  ResetSuccessAction
};
