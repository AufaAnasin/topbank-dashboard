import { EdituserlistModule } from './../../../component/edituserlist/edituserlist.module';
import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    EdituserlistModule
  ],
  exports: [
    UserlistComponent
  ]

})
export class UserlistModule { }
