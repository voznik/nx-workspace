import { CounterState } from './counter.reducer';
import { counterQuery } from './counter.selectors';

describe('Counter Selectors', () => {

  let storeState;

  beforeEach(() => {
    storeState = {
      counter: {
        total: 0
      }
    };
  });

  describe('Counter Selectors', () => {
    it("getTotal() should return 0", () => {
      const result = counterQuery.getTotal(storeState);

      expect(result).toBe(0);
    });

  });
});
