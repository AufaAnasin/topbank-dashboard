import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { AdminaddComponent } from './adminadd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdminaddComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ReactiveFormsModule,
  ],
  exports:
  [AdminaddComponent]
})
export class AdminaddModule { }
