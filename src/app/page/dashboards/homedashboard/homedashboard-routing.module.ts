import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomedashboardComponent } from './homedashboard.component';

const routes: Routes = [
  { path: '', component: HomedashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomedashboardRoutingModule { }
