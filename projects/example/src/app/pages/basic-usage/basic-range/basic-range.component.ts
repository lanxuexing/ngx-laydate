import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-range',
  templateUrl: './basic-range.component.html',
  styleUrls: ['./basic-range.component.scss'],
})
export class BasicRangeComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-range.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-range.component.ts').default; // DEMO IGNORE
  options_year = {
    lang: 'en',
    type: 'year',
    range: true
  };
  options_month = {
    lang: 'en',
    type: 'month',
    range: true
  };
  options_time = {
    lang: 'en',
    type: 'time',
    range: true
  };
  options_datetime = {
    lang: 'en',
    type: 'datetime',
    range: true
  };
  options_date = {
    lang: 'en',
    range: true
  }

  constructor() { }

  ngOnInit(): void { }
}
