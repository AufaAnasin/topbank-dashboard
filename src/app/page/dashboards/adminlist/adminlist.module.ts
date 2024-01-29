import { AdminaddModule } from './../../../component/adminadd/adminadd.module';
import { DeleteadminModule } from './../../../component/deleteadmin/deleteadmin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlistComponent } from './adminlist.component';
import { AdminlistRoutingModule } from './adminlist-routing.module';



@NgModule({
  declarations: [AdminlistComponent],
  imports: [
    CommonModule,
    AdminlistRoutingModule,
    DeleteadminModule,
    AdminaddModule
  ],
  exports: [AdminlistComponent]
})
export class AdminlistModule { }
