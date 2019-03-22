import { Component, TemplateRef } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import {
  CounterState,
  DecrementAction,
  IncrementAction,
  ResetAction,
  RootState
} from '@nxi/core';
import { UiModalService } from '@nxi/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'nxi-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class HomePage {
  counter$: Observable<CounterState> = this.store.pipe(select('counter'));

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private store: Store<RootState>,
    private uiModalService: UiModalService
  ) {}

  segmentChanged(ev: CustomEvent) {
    console.log('segmentChanged', ev.detail.value);
  }

  decrement() {
    this.store.dispatch(new DecrementAction());
  }

  increment() {
    this.store.dispatch(new IncrementAction());
  }

  reset() {
    this.store.dispatch(new ResetAction());
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you <strong>sure</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.reset();
            console.log('Confirm Okay');
          }
        }
      ]
    });
  }

  async presentLoading(event) {
    const loading = await this.loadingController.create({
      message: 'Reseting counter',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.reset();
    event.target.complete();
    console.log('Loading dismissed!');
  }

  openTemplate(content: TemplateRef<any>) {
    const data =
      'I got this data from the class that opened me (Template version)';
    this.uiModalService.openTemplate(content, data);
  }
}
