import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAdRoutingModule } from './new-ad-routing.module';
import { NewAdComponent } from './new-ad/new-ad.component';


@NgModule({
  declarations: [
    NewAdComponent
  ],
  imports: [
    CommonModule,
    NewAdRoutingModule
  ]
})
export class NewAdModule { }
