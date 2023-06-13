import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-general',
  templateUrl: './basic-general.component.html',
  styleUrls: ['./basic-general.component.scss'],
})
export class BasicGeneralComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-general.component.html').default; // DEMO IGNORE
  component = require('!!raw-loader!./basic-general.component.ts').default; // DEMO IGNORE
  options: any;
  options_en = {
    lang: 'en'
  };
  options_default = {
    lang: 'en',
    value: '1989-10-14'
  }

  constructor() { }

  ngOnInit(): void {

    this.options = {
      done: (value, date, endDate) => {
        // 得到日期生成的值，如：2017-08-18
        // Get the generated value of the date, for example: 2017-08-18
        console.log(value);
        // 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        // Get the date time object: {year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        console.log(date);
        // 得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上
        // Get the end date time object, only returns when range selection is enabled (range: true). The object members are the same as above.
        console.log(endDate);
      }
    };
  }
}
