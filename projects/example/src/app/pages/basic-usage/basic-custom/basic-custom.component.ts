import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-custom',
  templateUrl: './basic-custom.component.html',
  styleUrls: ['./basic-custom.component.scss'],
})
export class BasicCustomComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-custom.component.html').default; // DEMO IGNORE
  component = require('!!raw-loader!./basic-custom.component.ts').default; // DEMO IGNORE
  options_no_bottom_bar = {
    lang: 'en',
    showBottom: false
  };
  options_only_confirm = {
    lang: 'en',
    btns: ['confirm']
  };
  options_read_only = {
    lang: 'en',
    trigger: 'click'
  };
  options_not_input = {
    lang: 'en',
  };

  constructor() { }

  ngOnInit(): void { }
}
