import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CashmereModule } from './cashmere.module';
import { UI_COMPONENTS } from './components';
import { UI_SERVICES } from './services';

const SHARED_MODULES = [CashmereModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...SHARED_MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [CommonModule, RouterModule, ...SHARED_MODULES, ...UI_COMPONENTS],
  providers: [...UI_SERVICES]
})
export class UiModule {}
