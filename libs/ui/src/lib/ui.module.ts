import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CashmereModule } from './cashmere.module';
import { LayoutFullComponent } from './components';
import { UiModalService } from './services';

const UI_MODULES = [CashmereModule, FlexLayoutModule];
const UI_COMPONENTS = [LayoutFullComponent];
const UI_SERVICES = [UiModalService];

@NgModule({
  imports: [CommonModule, RouterModule, ...UI_MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [CommonModule, RouterModule, ...UI_MODULES, ...UI_COMPONENTS],
  providers: [...UI_SERVICES]
})
export class UiModule {}
