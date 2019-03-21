import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreModule } from './root-store.module';

@NgModule({
  imports: [CommonModule, RootStoreModule],
  exports: [RootStoreModule]
})
export class CoreModule {}
