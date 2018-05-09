import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgUploaderModule } from 'ngx-uploader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgUploaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
