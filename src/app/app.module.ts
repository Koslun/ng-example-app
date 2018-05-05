import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IntercomModule } from 'ng-intercom';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntercomModule.forRoot({
      appId: environment.intercomAppId, // from your Intercom config
      updateOnRouterChange: true // will automatically run `update` on router event changes. Default: `false`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
