import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsolutePipe } from './absolute.pipe';

const PIPES = [
  AbsolutePipe,
];

@NgModule({
  declarations: PIPES,
  imports: [
    CommonModule
  ],
  exports: PIPES
})
export class PipesModule { }
