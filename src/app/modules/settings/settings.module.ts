import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { InformationComponent } from './components/settings/information/information.component';
import { PasswordComponent } from './components/settings/password/password.component';


@NgModule({
  declarations: [
    SettingsComponent,
    InformationComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
