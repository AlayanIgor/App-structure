import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogWithSidebarComponent } from './components/catalog-with-sidebar/catalog-with-sidebar.component';


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogWithSidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
