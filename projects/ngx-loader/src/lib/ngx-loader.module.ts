import { NgModule } from '@angular/core';
import { NgxLoaderComponent } from './ngx-loader.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [NgxLoaderComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [NgxLoaderComponent]
})
export class NgxLoaderModule { }