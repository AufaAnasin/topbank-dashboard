import { NavbarModule } from './../../component/navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from './../../component/sidebar/sidebar.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SidebarModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {

 }
