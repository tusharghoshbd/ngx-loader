import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';

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
