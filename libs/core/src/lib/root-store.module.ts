import {
  NgModule,
  isDevMode,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  COUNTER_FEATURE_KEY,
  initialState as counterInitialState,
  counterReducer,
  CounterEffects
} from './state/counter';
import { reducers } from './state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers: isDevMode() ? [storeFreeze] : []
    }),
    isDevMode() ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(COUNTER_FEATURE_KEY, counterReducer, {
      initialState: counterInitialState
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CounterEffects])
  ]
})
export class RootStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootStoreModule
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: RootStoreModule) {
    if (parentModule) {
      throw new Error(
        'RootStoreModule already loaded. Import in root module only.'
      );
    }
  }
}
