import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxLaydateDirective } from 'projects/ngx-laydate/src/public-api';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-limit',
  templateUrl: './basic-limit.component.html',
  styleUrls: ['./basic-limit.component.scss'],
})
export class BasicLimitComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-limit.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-limit.component.ts').default; // DEMO IGNORE
  @ViewChild('myLaydate', { static: true, read: NgxLaydateDirective }) myLaydateRef: NgxLaydateDirective;
  options = {};
  options_day = {
    min: -7,
    max: 7
  };
  options_time = {
    type: 'time',
    min: '09:30:00',
    max: '17:30:00',
    btns: ['clear', 'confirm']
  };

  constructor() { }

  ngOnInit(): void {
    this.options = {
      min: '2016-10-14',
      max: '2080-10-14',
      ready: () => {
        this.myLaydateRef.hint('日期可选值设定在 <br> 2016-10-14 到 2080-10-14');
      }
    }
   
  }

}
