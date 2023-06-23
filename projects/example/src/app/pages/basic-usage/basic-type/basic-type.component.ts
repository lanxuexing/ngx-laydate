import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-type',
  templateUrl: './basic-type.component.html',
  styleUrls: ['./basic-type.component.scss'],
})
export class BasicTypeComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-type.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-type.component.ts').default; // DEMO IGNORE
  options_year = {
    lang: 'en',
    type: 'year'
  };
  options_month = {
    lang: 'en',
    type: 'month'
  };
  options_date = {
    lang: 'en',
    type: 'date'
  };
  options_time = {
    lang: 'en',
    type: 'time'
  };
  options_datetime = {
    lang: 'en',
    type: 'datetime'
  };

  constructor() { }

  ngOnInit(): void { }
}
