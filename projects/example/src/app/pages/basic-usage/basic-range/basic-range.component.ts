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
    type: 'year',
    range: true
  };
  options_month = {
    type: 'month',
    range: true
  };
  options_time = {
    type: 'time',
    range: true
  };
  options_datetime = {
    type: 'datetime',
    range: true
  };
  options_date = {
    range: true
  }

  constructor() { }

  ngOnInit(): void { }
}
