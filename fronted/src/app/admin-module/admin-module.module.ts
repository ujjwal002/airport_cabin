import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModuleModule { }
