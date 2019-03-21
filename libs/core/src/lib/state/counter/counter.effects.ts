import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { CounterActionTypes, ResetSuccessAction } from './counter.actions';

@Injectable()
export class CounterEffects {
  @Effect() resetSuccess$ = this.actions$.pipe(
    ofType(CounterActionTypes.Reset),
    map(() => new ResetSuccessAction())
  );

  constructor(private actions$: Actions) {}
}
