import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CounterEffects } from './counter.effects';
import { ResetAction, ResetSuccessAction } from './counter.actions';

describe('CounterEffects', () => {
  let actions: Observable<any>;
  let effects: CounterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CounterEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CounterEffects);
  });

  describe('resetSuccess$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new ResetAction() });
      expect(effects.resetSuccess$).toBeObservable(
        hot('-a-|', { a: new ResetSuccessAction() })
      );
    });
  });
});
