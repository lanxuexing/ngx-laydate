import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  date: '2021-09-12';
  options = {}

  ngOnInit(): void {
    this.options = {
      value: '2023-03-13',
      done: (data: any) => {
        console.log('哈哈哈', data);
      }
    }
  }

  onDone(event: any): void {
    console.log('done事件...', event);
  }

}
