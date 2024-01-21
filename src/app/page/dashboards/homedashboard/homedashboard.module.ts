import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomedashboardRoutingModule } from './homedashboard-routing.module';
import { HomedashboardComponent } from './homedashboard.component';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    HomedashboardComponent
  ],
  imports: [
    CommonModule,
    HomedashboardRoutingModule,
    ChartModule
  ],
  exports: [
    HomedashboardComponent
  ]
})
export class HomedashboardModule { }
