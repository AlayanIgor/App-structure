import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { LogInComponent } from './components/log-in/log-in.component';


@NgModule({
  declarations: [
    SingInComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
