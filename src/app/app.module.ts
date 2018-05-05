import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  JsonSchemaFormModule,
  NoFrameworkModule,
} from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NoFrameworkModule,
    JsonSchemaFormModule.forRoot(NoFrameworkModule),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
