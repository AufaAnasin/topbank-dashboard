import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./page/dashboards/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
