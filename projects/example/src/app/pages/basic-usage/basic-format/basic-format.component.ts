import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-format',
  templateUrl: './basic-format.component.html',
  styleUrls: ['./basic-format.component.scss'],
})
export class BasicFormatComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-format.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-format.component.ts').default; // DEMO IGNORE
  options_year = {
    format: 'dd/MM/yyyy' 
  };
  options_month = {
    type: 'month',
    range: '→',
    format: 'yyyy-MM'
  };
  options_time = {
    type: 'time',
    format: 'H点M分'
  };
  options_datetime = {
    type: 'datetime',
    range: '到',
    format: 'yyyy年M月d日H时m分s秒'
  };

  constructor() { }

  ngOnInit(): void { }
}