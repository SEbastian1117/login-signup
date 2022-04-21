import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../auth/pages/page404/page404.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '',
    children:[
      { path: '', component: DashboardComponent},
      {path: 'page404', component: Page404Component},
      { path: '**', redirectTo: 'page404'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
