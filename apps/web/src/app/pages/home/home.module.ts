import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UiModule } from '@nxi/ui';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { title: 'Home'}},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}
