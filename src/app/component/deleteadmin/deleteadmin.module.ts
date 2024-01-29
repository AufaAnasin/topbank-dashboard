import { ButtonModule } from 'primeng/button';
import { DeleteadminComponent } from './deleteadmin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [DeleteadminComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
  ], 
  exports: [DeleteadminComponent]

})
export class DeleteadminModule { }
