import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  JsonSchemaFormModule,
  NoFrameworkModule,
  NoFramework,
  Framework,
  WidgetLibraryService,
  FrameworkLibraryService,
  JsonSchemaFormService,
} from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NoFrameworkModule,
    {
      ngModule: JsonSchemaFormModule,
      providers: [
        JsonSchemaFormService,
        FrameworkLibraryService,
        WidgetLibraryService,
        { provide: Framework, useClass: NoFramework, multi: true },
      ],
    },
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
