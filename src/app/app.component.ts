import { Component, OnInit } from '@angular/core';
import { Intercom } from 'ng-intercom';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public intercom: Intercom) {}

  ngOnInit() {
    this.intercom.boot({
      app_id: environment.intercomAppId,
      // Supports all optional configuration.
      widget: {
        activator: '#intercom',
      },
    });
  }
}
