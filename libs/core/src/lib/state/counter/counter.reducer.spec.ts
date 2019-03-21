import { IncrementAction } from './counter.actions';
import {
  CounterState,
  initialState,
  counterReducer
} from './counter.reducer';

describe('Counter Reducer', () => {
  let storeState;


  beforeEach(() => {
    storeState = {
      counter: {
        total: 0
      }
    };
  });

  describe('valid Counter actions ', () => {
    it('should increment Counter', () => {
      const action = new IncrementAction();
      const result: CounterState = counterReducer(initialState, action);

      expect(result.total).toBe(1);
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = counterReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
