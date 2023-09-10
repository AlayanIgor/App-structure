import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogWithSidebarComponent } from './components/catalog-with-sidebar/catalog-with-sidebar.component';
import { ProductCardComponent } from './components/catalog/product-card/product-card.component';
import { SidebarComponent } from './components/catalog-with-sidebar/sidebar/sidebar.component';
import { CategoriesComponent } from './components/catalog/categories/categories.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogWithSidebarComponent,
    ProductCardComponent,
    SidebarComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
