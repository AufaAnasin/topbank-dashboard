import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./page/dashboards/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'userlist', loadChildren: () => import('./dashboards/userlist/userlist.module').then(m => m.UserlistModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
