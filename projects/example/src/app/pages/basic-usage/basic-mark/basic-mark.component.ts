import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-mark',
  templateUrl: './basic-mark.component.html',
  styleUrls: ['./basic-mark.component.scss'],
})
export class BasicMarkComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-mark.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-mark.component.ts').default; // DEMO IGNORE
  options_enable_gregorian_festival = {
    lang: 'en',
    calendar: true
  };
  options_custom_important_dates = {
    mark: {
      '0-10-14': '生日'
      ,'0-12-31': '跨年' // 每年的日期
      ,'0-0-10': '工资' // 每月某天
      ,'0-0-15': '月中'
      ,'2017-8-15': '' // 如果为空字符，则默认显示数字+徽章
      ,'2099-10-14': '呵呵'
    }
  };

  constructor() { }

  ngOnInit(): void { }
}
