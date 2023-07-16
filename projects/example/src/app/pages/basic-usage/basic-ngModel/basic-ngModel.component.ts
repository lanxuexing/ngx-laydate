import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-ngModel',
  templateUrl: './basic-ngModel.component.html',
  styleUrls: ['./basic-ngModel.component.scss'],
})
export class BasicNgModelComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-ngModel.component.html').default; // DEMO IGNORE
  component = require('!!raw-loader!./basic-ngModel.component.ts').default; // DEMO IGNORE
  options = {
    lang: 'en'
  };
  myDate: string;

  constructor() { }

  ngOnInit(): void { }

}
