import { DashboardComponent } from './page/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./page/dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
