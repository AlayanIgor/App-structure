import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './ad/ad.component';
import { GalleryComponent } from './ad/gallery/gallery.component';
import { InformationComponent } from './ad/information/information.component';



@NgModule({
  declarations: [
    AdComponent,
    GalleryComponent,
    InformationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdModule { }
