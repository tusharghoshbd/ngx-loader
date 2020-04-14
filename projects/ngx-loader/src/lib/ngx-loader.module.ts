import { NgModule } from '@angular/core';
import { NgxLoaderComponent } from './ngx-loader.component';
import { CommonModule } from '@angular/common';  


@NgModule({
  declarations: [NgxLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxLoaderComponent]
})
export class NgxLoaderModule { }