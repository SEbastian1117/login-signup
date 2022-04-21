import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SinUpComponent } from './pages/sin-up/sin-up.component';
import { MainComponent } from './pages/main/main.component';
import { Page404Component } from './pages/page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
  
  
    LoginComponent,
          SinUpComponent,
          MainComponent,
          Page404Component,
          HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
