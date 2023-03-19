import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-theme',
  templateUrl: './basic-theme.component.html',
  styleUrls: ['./basic-theme.component.scss'],
})
export class BasicThemeComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-theme.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-theme.component.ts').default; // DEMO IGNORE
  options_dark_green = {
    theme: 'molv'
  };
  options_custom_color = {
    theme: '#393D49'
  };
  options_grid = {
    theme: 'grid'
  };

  constructor() { }

  ngOnInit(): void { }
}
