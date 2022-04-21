import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { Page404Component } from './pages/page404/page404.component';
import { SinUpComponent } from './pages/sin-up/sin-up.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:  [
    
    {
      path: 'sin-up',
      component: SinUpComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'page404',
      component: Page404Component
    },
    {
      path: 'home',
    component: HomeComponent 
    },
    {
      path: '**',
      redirectTo: 'page404'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
