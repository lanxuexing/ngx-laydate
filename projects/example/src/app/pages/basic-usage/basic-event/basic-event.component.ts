import { Component, OnInit } from '@angular/core';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'app-basic-event',
  templateUrl: './basic-event.component.html',
  styleUrls: ['./basic-event.component.scss'],
})
export class BasicEventComponent implements OnInit {
  html = require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./basic-event.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./basic-event.component.ts').default; // DEMO IGNORE
  options_selected = {
    done: (value, date) => {
      alert('你选择的日期是：' + value + '\n获得的对象是' + JSON.stringify(date));
    }
  };
  options_toggle = {
    change: (value, date) => {
      alert('你选择的日期是：' + value + '\n\n获得的对象是' + JSON.stringify(date));
    }
  };

  constructor() { }

  ngOnInit(): void {}

  onDone([value, date]): void {
    alert('你选择的日期是：' + value + '\n获得的对象是' + JSON.stringify(date));
  }

  onChange([value, date]): void {
    alert('你选择的日期是：' + value + '\n\n获得的对象是' + JSON.stringify(date));
  }
}
