import { Component, TemplateRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CounterState, DecrementAction, IncrementAction, ResetAction, RootState } from '@nxi/core';
import { UiModalService } from '@nxi/ui';
import { Observable } from 'rxjs';

@Component({
    selector: 'nxi-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class HomePage {

  counter$: Observable<CounterState> = this.store.pipe(select('counter'));

    constructor(
      private store: Store<RootState>,
      private uiModalService: UiModalService
    ) {}

    decrement() {
      this.store.dispatch(new DecrementAction());
    }

    increment() {
      this.store.dispatch(new IncrementAction());
    }

    reset() {
      this.store.dispatch(new ResetAction());
    }

    openTemplate(content: TemplateRef<any>) {
      const data =
        'I got this data from the class that opened me (Template version)';
      this.uiModalService.openTemplate(content, data);
    }

}
