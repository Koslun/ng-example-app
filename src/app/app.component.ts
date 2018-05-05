import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  jsonFormOptions = { addSubmit: false };

  // results in data:
  // {schema: [{description: string, name: string}]}
  jsonSchemaJson: any = {
    type: 'object',
    properties: {
      schema: {
        type: 'array',
        title: 'Basic information',
        uniqueItems: true,
        items: {
          type: 'object',
          properties: {
            name: { title: 'Name of the activity', type: 'string' },
            description: {
              title: 'Description of the activity',
              type: 'string',
            },
          },
        },
      },
    },
  };

  constructor() {}

  ngOnInit() {
    this.jsonSchemaJson.data = {};
  }

  onSubmit(event) {
    console.log('onSubmit event', event);
  }
}
