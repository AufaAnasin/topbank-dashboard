import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomedashboardRoutingModule } from './homedashboard-routing.module';
import { HomedashboardComponent } from './homedashboard.component';


@NgModule({
  declarations: [
    HomedashboardComponent
  ],
  imports: [
    CommonModule,
    HomedashboardRoutingModule
  ],
  exports: [
    HomedashboardComponent
  ]
})
export class HomedashboardModule { }
