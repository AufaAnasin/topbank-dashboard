import { BarchartComponent } from './barchart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    BarchartComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [
    BarchartComponent
  ]
})
export class BarchartModule { }
