import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EdituserlistComponent } from './edituserlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    EdituserlistComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [EdituserlistComponent]
})
export class EdituserlistModule { }
