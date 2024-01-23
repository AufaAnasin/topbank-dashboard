import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent, 
  children: [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', loadChildren: () => import('../homedashboard/homedashboard.module').then((m) => m.HomedashboardModule) },
    { path: 'userlist', loadChildren: () => import('../userlist/userlist.module').then((m) => m.UserlistModule) }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
