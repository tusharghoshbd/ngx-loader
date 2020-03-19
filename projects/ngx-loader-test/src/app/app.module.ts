import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLoaderModule } from './ngx-loader/ngx-loader.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
