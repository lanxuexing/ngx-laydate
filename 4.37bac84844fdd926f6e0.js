(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/Irh":function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nYear: <input laydate [options]="options" #myLaydate="laydate">\n\nDay: <input laydate [options]="options_day">\n\nTime: <input laydate [options]="options_time">\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},"9BYk":function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-custom',\n  templateUrl: './basic-custom.component.html',\n  styleUrls: ['./basic-custom.component.scss'],\n})\nexport class BasicCustomComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-custom.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-custom.component.ts').default; // DEMO IGNORE\n  options_no_bottom_bar = {\n    showBottom: false\n  };\n  options_only_confirm = {\n    btns: ['confirm']\n  };\n  options_read_only = {\n    trigger: 'click'\n  };\n  options_not_input = {};\n\n  constructor() { }\n\n  ngOnInit(): void { }\n}\n"},"9Dys":function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nYear: <input laydate [options]="options_year">\n\nMonth: <input laydate [options]="options_month">\n\nTime: <input laydate [options]="options_time">\n\nDateTime: <input laydate [options]="options_datetime">\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},KTip:function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nChinese: <input laydate [options]="options">\n\nEnglish: <input laydate [options]="options_en">\n\nDefault value: <input laydate [options]="options_default">\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},SA51:function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit, ViewChild } from '@angular/core';\nimport { NgxLaydateDirective } from 'projects/ngx-laydate/src/public-api';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-limit',\n  templateUrl: './basic-limit.component.html',\n  styleUrls: ['./basic-limit.component.scss'],\n})\nexport class BasicLimitComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-limit.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-limit.component.ts').default; // DEMO IGNORE\n  @ViewChild('myLaydate', { static: true, read: NgxLaydateDirective }) myLaydateRef: NgxLaydateDirective;\n  options = {};\n  options_day = {\n    min: -7,\n    max: 7\n  };\n  options_time = {\n    type: 'time',\n    min: '09:30:00',\n    max: '17:30:00',\n    btns: ['clear', 'confirm']\n  };\n\n  constructor() { }\n\n  ngOnInit(): void {\n    this.options = {\n      min: '2016-10-14',\n      max: '2080-10-14',\n      ready: () => {\n        this.myLaydateRef.hint('\u65e5\u671f\u53ef\u9009\u503c\u8bbe\u5b9a\u5728 <br> 2016-10-14 \u5230 2080-10-14');\n      }\n    }\n   \n  }\n\n}\n"},SIPY:function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-general',\n  templateUrl: './basic-general.component.html',\n  styleUrls: ['./basic-general.component.scss'],\n})\nexport class BasicGeneralComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-general.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-general.component.ts').default; // DEMO IGNORE\n  options: any;\n  options_en = {\n    lang: 'en'\n  };\n  options_default = {\n    value: '1989-10-14'\n  }\n\n  constructor() { }\n\n  ngOnInit(): void {\n\n    this.options = {\n      done: (value, date, endDate) => {\n        // \u5f97\u5230\u65e5\u671f\u751f\u6210\u7684\u503c\uff0c\u5982\uff1a2017-08-18\n        // Get the generated value of the date, for example: 2017-08-18\n        console.log(value);\n        // \u5f97\u5230\u65e5\u671f\u65f6\u95f4\u5bf9\u8c61\uff1a{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}\n        // Get the date time object: {year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}\n        console.log(date);\n        // \u5f97\u7ed3\u675f\u7684\u65e5\u671f\u65f6\u95f4\u5bf9\u8c61\uff0c\u5f00\u542f\u8303\u56f4\u9009\u62e9\uff08range: true\uff09\u624d\u4f1a\u8fd4\u56de\u3002\u5bf9\u8c61\u6210\u5458\u540c\u4e0a\n        // Get the end date time object, only returns when range selection is enabled (range: true). The object members are the same as above.\n        console.log(endDate);\n      }\n    };\n  }\n}\n"},TJQ4:function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-format',\n  templateUrl: './basic-format.component.html',\n  styleUrls: ['./basic-format.component.scss'],\n})\nexport class BasicFormatComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-format.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-format.component.ts').default; // DEMO IGNORE\n  options_year = {\n    format: 'dd/MM/yyyy' \n  };\n  options_month = {\n    type: 'month',\n    range: '\u2192',\n    format: 'yyyy-MM'\n  };\n  options_time = {\n    type: 'time',\n    format: 'H\u70b9M\u5206'\n  };\n  options_datetime = {\n    type: 'datetime',\n    range: '\u5230',\n    format: 'yyyy\u5e74M\u6708d\u65e5H\u65f6m\u5206s\u79d2'\n  };\n\n  constructor() { }\n\n  ngOnInit(): void { }\n}\n"},TvIc:function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nYear: <input laydate [options]="options_year">\n\nMonth: <input laydate [options]="options_month">\n\nTime: <input laydate [options]="options_time">\n\nDateTime: <input laydate [options]="options_datetime">\n\nDate: <input laydate [options]="options_date">\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},UEy4:function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nSelected: <input laydate [options]="options_selected">\n\nToggle: <input laydate [options]="options_toggle">\n\nNgSelected: <input laydate (laydateDone)="onDone($event)">\n\nNgToogle: <input laydate (laydateChange)="onChange($event)">\n\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},Z2bW:function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-type',\n  templateUrl: './basic-type.component.html',\n  styleUrls: ['./basic-type.component.scss'],\n})\nexport class BasicTypeComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-type.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-type.component.ts').default; // DEMO IGNORE\n  options_year = {\n    type: 'year'\n  };\n  options_month = {\n    type: 'month'\n  };\n  options_time = {\n    type: 'time'\n  };\n  options_datetime = {\n    type: 'datetime'\n  };\n\n  constructor() { }\n\n  ngOnInit(): void { }\n}\n"},ZH9E:function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nEnable Gregorian festival: <input laydate [options]="options_enable_gregorian_festival">\n\nCustom Important Dates: <input laydate [options]="options_custom_important_dates">\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},czpL:function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-range',\n  templateUrl: './basic-range.component.html',\n  styleUrls: ['./basic-range.component.scss'],\n})\nexport class BasicRangeComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-range.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-range.component.ts').default; // DEMO IGNORE\n  options_year = {\n    type: 'year',\n    range: true\n  };\n  options_month = {\n    type: 'month',\n    range: true\n  };\n  options_time = {\n    type: 'time',\n    range: true\n  };\n  options_datetime = {\n    type: 'datetime',\n    range: true\n  };\n  options_date = {\n    range: true\n  }\n\n  constructor() { }\n\n  ngOnInit(): void { }\n}\n"},"j/Ak":function(n,t){n.exports='\n\x3c!-- DEMO START --\x3e\nDark Green Theme: <input laydate [options]="options_dark_green">\n\nCustom color theme: <input laydate [options]="options_custom_color">\n\nGrid Theme: <input laydate [options]="options_grid">\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},j0pA:function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nNo Bottom Bar: <input laydate [options]="options_no_bottom_bar">\n\nOnly Confirm: <input laydate [options]="options_only_confirm">\n\nRead Only: <input laydate readonly="readonly" [options]="options_read_only">\n\nNot Input: <span laydate [options]="options_not_input" class="box">My is span element</span>\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},"k2y/":function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-othen',\n  templateUrl: './basic-othen.component.html',\n  styleUrls: ['./basic-othen.component.scss'],\n})\nexport class BasicOthenComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-othen.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-othen.component.ts').default; // DEMO IGNORE\n  options_custom_event = {\n    trigger: 'mouseover'\n  };\n  options_click_to_trigger = {\n    eventElem: '#test',\n    trigger: 'click'\n  };\n  options_mark = {\n    mark: {\n      '0-10-14': '\u751f\u65e5'\n      ,'0-12-31': '\u8de8\u5e74' // \u6bcf\u5e74\u7684\u65e5\u671f\n      ,'0-0-10': '\u5de5\u8d44' // \u6bcf\u6708\u67d0\u5929\n      ,'0-0-15': '\u6708\u4e2d'\n      ,'2017-8-15': '' // \u5982\u679c\u4e3a\u7a7a\u5b57\u7b26\uff0c\u5219\u9ed8\u8ba4\u663e\u793a\u6570\u5b57+\u5fbd\u7ae0\n      ,'2099-10-14': '\u5475\u5475'\n    }\n  };\n\n  constructor() { }\n\n  ngOnInit(): void { }\n}\n"},"p/YS":function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-event',\n  templateUrl: './basic-event.component.html',\n  styleUrls: ['./basic-event.component.scss'],\n})\nexport class BasicEventComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-event.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-event.component.ts').default; // DEMO IGNORE\n  options_selected = {\n    done: (value, date) => {\n      alert('\u4f60\u9009\u62e9\u7684\u65e5\u671f\u662f\uff1a' + value + '\\n\u83b7\u5f97\u7684\u5bf9\u8c61\u662f' + JSON.stringify(date));\n    }\n  };\n  options_toggle = {\n    change: (value, date) => {\n      alert('\u4f60\u9009\u62e9\u7684\u65e5\u671f\u662f\uff1a' + value + '\\n\\n\u83b7\u5f97\u7684\u5bf9\u8c61\u662f' + JSON.stringify(date));\n    }\n  };\n\n  constructor() { }\n\n  ngOnInit(): void {}\n\n  onDone([value, date]): void {\n    alert('\u4f60\u9009\u62e9\u7684\u65e5\u671f\u662f\uff1a' + value + '\\n\u83b7\u5f97\u7684\u5bf9\u8c61\u662f' + JSON.stringify(date));\n  }\n\n  onChange([value, date]): void {\n    alert('\u4f60\u9009\u62e9\u7684\u65e5\u671f\u662f\uff1a' + value + '\\n\\n\u83b7\u5f97\u7684\u5bf9\u8c61\u662f' + JSON.stringify(date));\n  }\n}\n"},pGMV:function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nCustom Event: <input laydate [options]="options_custom_event">\n\nClick to trigger: <span laydate [options]="options_click_to_trigger"></span> <span class="trigger" id="test">Click to trigger</span>\n\nMark: <input laydate [options]="options_mark">\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},qwIT:function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-mark',\n  templateUrl: './basic-mark.component.html',\n  styleUrls: ['./basic-mark.component.scss'],\n})\nexport class BasicMarkComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-mark.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-mark.component.ts').default; // DEMO IGNORE\n  options_enable_gregorian_festival = {\n    calendar: true\n  };\n  options_custom_important_dates = {\n    mark: {\n      '0-10-14': '\u751f\u65e5'\n      ,'0-12-31': '\u8de8\u5e74' // \u6bcf\u5e74\u7684\u65e5\u671f\n      ,'0-0-10': '\u5de5\u8d44' // \u6bcf\u6708\u67d0\u5929\n      ,'0-0-15': '\u6708\u4e2d'\n      ,'2017-8-15': '' // \u5982\u679c\u4e3a\u7a7a\u5b57\u7b26\uff0c\u5219\u9ed8\u8ba4\u663e\u793a\u6570\u5b57+\u5fbd\u7ae0\n      ,'2099-10-14': '\u5475\u5475'\n    }\n  };\n\n  constructor() { }\n\n  ngOnInit(): void { }\n}\n"},tJYF:function(n,t){n.exports='\x3c!-- DEMO START --\x3e\nYear: <input laydate [options]="options_year">\n\nMonth: <input laydate [options]="options_month">\n\nTime: <input laydate [options]="options_time">\n\nDate: <input laydate [options]="options_datetime">\n\x3c!-- DEMO END --\x3e\n\n<code-block [html]="html" [component]="component">\n</code-block>'},xLvS:function(n,t,e){"use strict";e.r(t),t.default="import { Component, OnInit } from '@angular/core';\ndeclare const require: any; // DEMO IGNORE\n\n@Component({\n  selector: 'app-basic-theme',\n  templateUrl: './basic-theme.component.html',\n  styleUrls: ['./basic-theme.component.scss'],\n})\nexport class BasicThemeComponent implements OnInit {\n  html = require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./basic-theme.component.html'); // DEMO IGNORE\n  component = require('!!raw-loader!./basic-theme.component.ts').default; // DEMO IGNORE\n  options_dark_green = {\n    theme: 'molv'\n  };\n  options_custom_color = {\n    theme: '#393D49'\n  };\n  options_grid = {\n    theme: 'grid'\n  };\n\n  constructor() { }\n\n  ngOnInit(): void { }\n}\n"},xQpc:function(n,t,e){"use strict";e.r(t),e.d(t,"BaseUsageModule",(function(){return Y}));var o=e("ADsi"),i=e("1VvW"),s=e("kZht"),c=e("oVZD"),a=e("oPzO"),p=e("An66"),r=e("i9Na");function m(n,t){if(1&n&&(s.Ob(0,"nz-tab",6),s.Kb(1,"markdown",7),s.Yb(2,"language"),s.Nb()),2&n){const n=s.Xb();s.zb(1),s.cc("data",s.Zb(2,1,n.htmlCode,"html"))}}function l(n,t){if(1&n&&(s.Ob(0,"nz-tab",8),s.Kb(1,"markdown",7),s.Yb(2,"language"),s.Nb()),2&n){const n=s.Xb();s.zb(1),s.cc("data",s.Zb(2,1,n.componentCode,"typescript"))}}function b(n,t){if(1&n&&(s.Ob(0,"nz-tab",9),s.Kb(1,"markdown",7),s.Yb(2,"language"),s.Nb()),2&n){const n=s.Xb();s.zb(1),s.cc("data",s.Zb(2,1,n.scssCode,"scss"))}}function u(n,t){if(1&n&&(s.Ob(0,"nz-tab",10),s.Kb(1,"markdown",7),s.Yb(2,"language"),s.Nb()),2&n){const n=s.Xb();s.zb(1),s.cc("data",s.Zb(2,1,n.dataCode,"typescript"))}}let d=(()=>{class n{constructor(){}ngOnInit(){this.html&&(this.htmlCode=this.html.match(/DEMO START -->\n((.*\n)*)<!-- DEMO END/)[1]),this.component&&(this.componentCode=this.component.replace(/.*DEMO IGNORE\n/g,"")),this.scss&&(this.scssCode=this.scss.replace(/.*DEMO IGNORE\n/g,"")),this.data&&(this.dataCode=this.data.replace(/.*DEMO IGNORE\n/g,""))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["code-block"]],inputs:{html:"html",component:"component",scss:"scss",data:"data"},decls:6,vars:4,consts:[[1,"code-block"],["nzType","card"],["nzTitle","html",4,"ngIf"],["nzTitle","component",4,"ngIf"],["nzTitle","scss",4,"ngIf"],["nzTitle","data",4,"ngIf"],["nzTitle","html"],[3,"data"],["nzTitle","component"],["nzTitle","scss"],["nzTitle","data"]],template:function(n,t){1&n&&(s.Ob(0,"div",0),s.Ob(1,"nz-tabset",1),s.nc(2,m,3,4,"nz-tab",2),s.nc(3,l,3,4,"nz-tab",3),s.nc(4,b,3,4,"nz-tab",4),s.nc(5,u,3,4,"nz-tab",5),s.Nb(),s.Nb()),2&n&&(s.zb(2),s.cc("ngIf",t.htmlCode),s.zb(1),s.cc("ngIf",t.componentCode),s.zb(1),s.cc("ngIf",t.scssCode),s.zb(1),s.cc("ngIf",t.dataCode))},directives:[c.c,p.k,c.a,r.b],pipes:[r.a],styles:[".code-block[_ngcontent-%COMP%]{margin-top:16px}"]}),n})(),h=(()=>{class n{constructor(){this.html=e("KTip"),this.component=e("SIPY").default,this.options_en={lang:"en"},this.options_default={value:"1989-10-14"}}ngOnInit(){this.options={done:(n,t,e)=>{console.log(n),console.log(t),console.log(e)}}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-general"]],decls:7,vars:5,consts:[["laydate","",3,"options"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nChinese: "),s.Kb(1,"input",0),s.pc(2," English: "),s.Kb(3,"input",0),s.pc(4," Default value: "),s.Kb(5,"input",0),s.Kb(6,"code-block",1)),2&n&&(s.zb(1),s.cc("options",t.options),s.zb(2),s.cc("options",t.options_en),s.zb(2),s.cc("options",t.options_default),s.zb(1),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[""]}),n})(),y=(()=>{class n{constructor(){this.html=e("9Dys"),this.component=e("Z2bW").default,this.options_year={type:"year"},this.options_month={type:"month"},this.options_time={type:"time"},this.options_datetime={type:"datetime"}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-type"]],decls:9,vars:6,consts:[["laydate","",3,"options"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nYear: "),s.Kb(1,"input",0),s.pc(2," Month: "),s.Kb(3,"input",0),s.pc(4," Time: "),s.Kb(5,"input",0),s.pc(6," DateTime: "),s.Kb(7,"input",0),s.Kb(8,"code-block",1)),2&n&&(s.zb(1),s.cc("options",t.options_year),s.zb(2),s.cc("options",t.options_month),s.zb(2),s.cc("options",t.options_time),s.zb(2),s.cc("options",t.options_datetime),s.zb(1),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[""]}),n})(),g=(()=>{class n{constructor(){this.html=e("TvIc"),this.component=e("czpL").default,this.options_year={type:"year",range:!0},this.options_month={type:"month",range:!0},this.options_time={type:"time",range:!0},this.options_datetime={type:"datetime",range:!0},this.options_date={range:!0}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-range"]],decls:11,vars:7,consts:[["laydate","",3,"options"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nYear: "),s.Kb(1,"input",0),s.pc(2," Month: "),s.Kb(3,"input",0),s.pc(4," Time: "),s.Kb(5,"input",0),s.pc(6," DateTime: "),s.Kb(7,"input",0),s.pc(8," Date: "),s.Kb(9,"input",0),s.Kb(10,"code-block",1)),2&n&&(s.zb(1),s.cc("options",t.options_year),s.zb(2),s.cc("options",t.options_month),s.zb(2),s.cc("options",t.options_time),s.zb(2),s.cc("options",t.options_datetime),s.zb(2),s.cc("options",t.options_date),s.zb(1),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[""]}),n})(),f=(()=>{class n{constructor(){this.html=e("tJYF"),this.component=e("TJQ4").default,this.options_year={format:"dd/MM/yyyy"},this.options_month={type:"month",range:"\u2192",format:"yyyy-MM"},this.options_time={type:"time",format:"H\u70b9M\u5206"},this.options_datetime={type:"datetime",range:"\u5230",format:"yyyy\u5e74M\u6708d\u65e5H\u65f6m\u5206s\u79d2"}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-format"]],decls:9,vars:6,consts:[["laydate","",3,"options"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nYear: "),s.Kb(1,"input",0),s.pc(2," Month: "),s.Kb(3,"input",0),s.pc(4," Time: "),s.Kb(5,"input",0),s.pc(6," Date: "),s.Kb(7,"input",0),s.Kb(8,"code-block",1)),2&n&&(s.zb(1),s.cc("options",t.options_year),s.zb(2),s.cc("options",t.options_month),s.zb(2),s.cc("options",t.options_time),s.zb(2),s.cc("options",t.options_datetime),s.zb(1),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[""]}),n})();var _=e("veD+");const O=["myLaydate"];let v=(()=>{class n{constructor(){this.html=e("/Irh"),this.component=e("SA51").default,this.options={},this.options_day={min:-7,max:7},this.options_time={type:"time",min:"09:30:00",max:"17:30:00",btns:["clear","confirm"]}}ngOnInit(){this.options={min:"2016-10-14",max:"2080-10-14",ready:()=>{this.myLaydateRef.hint("\u65e5\u671f\u53ef\u9009\u503c\u8bbe\u5b9a\u5728 <br> 2016-10-14 \u5230 2080-10-14")}}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-limit"]],viewQuery:function(n,t){var e;1&n&&s.kc(O,!0,_.a),2&n&&s.ec(e=s.Wb())&&(t.myLaydateRef=e.first)},decls:8,vars:5,consts:[["laydate","",3,"options"],["myLaydate","laydate"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nYear: "),s.Kb(1,"input",0,1),s.pc(3," Day: "),s.Kb(4,"input",0),s.pc(5," Time: "),s.Kb(6,"input",0),s.Kb(7,"code-block",2)),2&n&&(s.zb(1),s.cc("options",t.options),s.zb(3),s.cc("options",t.options_day),s.zb(2),s.cc("options",t.options_time),s.zb(1),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[""]}),n})(),D=(()=>{class n{constructor(){this.html=e("j/Ak"),this.component=e("xLvS").default,this.options_dark_green={theme:"molv"},this.options_custom_color={theme:"#393D49"},this.options_grid={theme:"grid"}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-theme"]],decls:7,vars:5,consts:[["laydate","",3,"options"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nDark Green Theme: "),s.Kb(1,"input",0),s.pc(2," Custom color theme: "),s.Kb(3,"input",0),s.pc(4," Grid Theme: "),s.Kb(5,"input",0),s.Kb(6,"code-block",1)),2&n&&(s.zb(1),s.cc("options",t.options_dark_green),s.zb(2),s.cc("options",t.options_custom_color),s.zb(2),s.cc("options",t.options_grid),s.zb(1),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[""]}),n})(),E=(()=>{class n{constructor(){this.html=e("UEy4"),this.component=e("p/YS").default,this.options_selected={done:(n,t)=>{alert("\u4f60\u9009\u62e9\u7684\u65e5\u671f\u662f\uff1a"+n+"\n\u83b7\u5f97\u7684\u5bf9\u8c61\u662f"+JSON.stringify(t))}},this.options_toggle={change:(n,t)=>{alert("\u4f60\u9009\u62e9\u7684\u65e5\u671f\u662f\uff1a"+n+"\n\n\u83b7\u5f97\u7684\u5bf9\u8c61\u662f"+JSON.stringify(t))}}}ngOnInit(){}onDone([n,t]){alert("\u4f60\u9009\u62e9\u7684\u65e5\u671f\u662f\uff1a"+n+"\n\u83b7\u5f97\u7684\u5bf9\u8c61\u662f"+JSON.stringify(t))}onChange([n,t]){alert("\u4f60\u9009\u62e9\u7684\u65e5\u671f\u662f\uff1a"+n+"\n\n\u83b7\u5f97\u7684\u5bf9\u8c61\u662f"+JSON.stringify(t))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-event"]],decls:9,vars:4,consts:[["laydate","",3,"options"],["laydate","",3,"laydateDone"],["laydate","",3,"laydateChange"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nSelected: "),s.Kb(1,"input",0),s.pc(2," Toggle: "),s.Kb(3,"input",0),s.pc(4," NgSelected: "),s.Ob(5,"input",1),s.Vb("laydateDone",(function(n){return t.onDone(n)})),s.Nb(),s.pc(6," NgToogle: "),s.Ob(7,"input",2),s.Vb("laydateChange",(function(n){return t.onChange(n)})),s.Nb(),s.Kb(8,"code-block",3)),2&n&&(s.zb(1),s.cc("options",t.options_selected),s.zb(2),s.cc("options",t.options_toggle),s.zb(5),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[""]}),n})(),z=(()=>{class n{constructor(){this.html=e("j0pA"),this.component=e("9BYk").default,this.options_no_bottom_bar={showBottom:!1},this.options_only_confirm={btns:["confirm"]},this.options_read_only={trigger:"click"},this.options_not_input={}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-custom"]],decls:10,vars:6,consts:[["laydate","",3,"options"],["laydate","","readonly","",3,"options"],["laydate","",1,"box",3,"options"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nNo Bottom Bar: "),s.Kb(1,"input",0),s.pc(2," Only Confirm: "),s.Kb(3,"input",0),s.pc(4," Read Only: "),s.Kb(5,"input",1),s.pc(6," Not Input: "),s.Ob(7,"span",2),s.pc(8,"My is span element"),s.Nb(),s.Kb(9,"code-block",3)),2&n&&(s.zb(1),s.cc("options",t.options_no_bottom_bar),s.zb(2),s.cc("options",t.options_only_confirm),s.zb(2),s.cc("options",t.options_read_only),s.zb(2),s.cc("options",t.options_not_input),s.zb(2),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[".box[_ngcontent-%COMP%]{border:1px solid;border-radius:4px;padding:4px 12px}"]}),n})(),I=(()=>{class n{constructor(){this.html=e("ZH9E"),this.component=e("qwIT").default,this.options_enable_gregorian_festival={calendar:!0},this.options_custom_important_dates={mark:{"0-10-14":"\u751f\u65e5","0-12-31":"\u8de8\u5e74","0-0-10":"\u5de5\u8d44","0-0-15":"\u6708\u4e2d","2017-8-15":"","2099-10-14":"\u5475\u5475"}}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-mark"]],decls:5,vars:4,consts:[["laydate","",3,"options"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nEnable Gregorian festival: "),s.Kb(1,"input",0),s.pc(2," Custom Important Dates: "),s.Kb(3,"input",0),s.Kb(4,"code-block",1)),2&n&&(s.zb(1),s.cc("options",t.options_enable_gregorian_festival),s.zb(2),s.cc("options",t.options_custom_important_dates),s.zb(1),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[".trigger[_ngcontent-%COMP%]{color:red;padding:0 8px}"]}),n})(),M=(()=>{class n{constructor(){this.html=e("pGMV"),this.component=e("k2y/").default,this.options_custom_event={trigger:"mouseover"},this.options_click_to_trigger={eventElem:"#test",trigger:"click"},this.options_mark={mark:{"0-10-14":"\u751f\u65e5","0-12-31":"\u8de8\u5e74","0-0-10":"\u5de5\u8d44","0-0-15":"\u6708\u4e2d","2017-8-15":"","2099-10-14":"\u5475\u5475"}}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic-othen"]],decls:9,vars:5,consts:[["laydate","",3,"options"],["id","test",1,"trigger"],[3,"html","component"]],template:function(n,t){1&n&&(s.pc(0,"\nCustom Event: "),s.Kb(1,"input",0),s.pc(2," Click to trigger: "),s.Kb(3,"span",0),s.Ob(4,"span",1),s.pc(5,"Click to trigger"),s.Nb(),s.pc(6," Mark: "),s.Kb(7,"input",0),s.Kb(8,"code-block",2)),2&n&&(s.zb(1),s.cc("options",t.options_custom_event),s.zb(2),s.cc("options",t.options_click_to_trigger),s.zb(4),s.cc("options",t.options_mark),s.zb(1),s.cc("html",t.html)("component",t.component))},directives:[a.b,d],styles:[".trigger[_ngcontent-%COMP%]{color:red;padding:0 8px}"]}),n})();function k(n,t){1&n&&s.Kb(0,"app-basic-general")}function x(n,t){1&n&&s.Kb(0,"app-basic-type")}function N(n,t){1&n&&s.Kb(0,"app-basic-range")}function C(n,t){1&n&&s.Kb(0,"app-basic-format")}function T(n,t){1&n&&s.Kb(0,"app-basic-limit")}function K(n,t){1&n&&s.Kb(0,"app-basic-theme")}function R(n,t){1&n&&s.Kb(0,"app-basic-event")}function G(n,t){1&n&&s.Kb(0,"app-basic-custom")}function w(n,t){1&n&&s.Kb(0,"app-basic-mark")}function S(n,t){1&n&&s.Kb(0,"app-basic-othen")}const q=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Db({type:n,selectors:[["app-basic"]],decls:21,vars:1,consts:[[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","General"],["nz-tab",""],["nzTitle","Type"],["nzTitle","Range"],["nzTitle","Format"],["nzTitle","Limit"],["nzTitle","Theme"],["nzTitle","Event"],["nzTitle","Custom"],["nzTitle","Mark"],["nzTitle","Othen"]],template:function(n,t){1&n&&(s.Ob(0,"nz-tabset",0),s.Ob(1,"nz-tab",1),s.nc(2,k,1,0,"ng-template",2),s.Nb(),s.Ob(3,"nz-tab",3),s.nc(4,x,1,0,"ng-template",2),s.Nb(),s.Ob(5,"nz-tab",4),s.nc(6,N,1,0,"ng-template",2),s.Nb(),s.Ob(7,"nz-tab",5),s.nc(8,C,1,0,"ng-template",2),s.Nb(),s.Ob(9,"nz-tab",6),s.nc(10,T,1,0,"ng-template",2),s.Nb(),s.Ob(11,"nz-tab",7),s.nc(12,K,1,0,"ng-template",2),s.Nb(),s.Ob(13,"nz-tab",8),s.nc(14,R,1,0,"ng-template",2),s.Nb(),s.Ob(15,"nz-tab",9),s.nc(16,G,1,0,"ng-template",2),s.Nb(),s.Ob(17,"nz-tab",10),s.nc(18,w,1,0,"ng-template",2),s.Nb(),s.Ob(19,"nz-tab",11),s.nc(20,S,1,0,"ng-template",2),s.Nb(),s.Nb()),2&n&&s.cc("nzTabPosition","left")},directives:[c.c,c.a,c.b,h,y,g,f,v,D,E,z,I,M],styles:[""]}),n})()}];let U=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[i.f.forChild(q)],i.f]}),n})(),Y=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[U,o.a]]}),n})()}}]);