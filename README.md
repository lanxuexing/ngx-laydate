# NgxLaydate

<!-- Badges section here. -->

<p align="center">
  <a href="https://github.com/lanxuexing/ngx-laydate/actions"><img src="https://github.com/lanxuexing/ngx-laydate/workflows/build/badge.svg?branch=main" alt="Build Status"></a>
  <a href="https://npmcharts.com/compare/ngx-laydate?minimal=true"><img src="https://img.shields.io/npm/dm/ngx-laydate.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/ngx-laydate"><img src="https://img.shields.io/npm/v/ngx-laydate.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/ngx-laydate"><img src="https://img.shields.io/npm/l/ngx-laydate.svg?sanitize=true" alt="License"></a>
</p>

Angular directive for [Laydate](https://github.com/layui/laydate) (version >= 5.x)

- [Online Demo](https://lanxuexing.github.io/ngx-laydate)
- [Online Docs](https://lanxuexing.github.io/ngx-laydate/api-docs)
- [Laydate Online Demo](https://layui.gitee.io/v2/demo/laydate.html)
- [Laydate Online Docs](https://layui.gitee.io/v2/docs/modules/laydate.html)

## Table of contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Directive](#directive)
  - [Laydate Instance](#laydate-instance)
- [Events](#events)
- [Demo](#demo)

# Getting Started

`ngx-laydate` is an Angular (ver >= 2.x) directive for Laydate (ver >= 5.x).

Latest version @npm:

- `v11.x` for Angular >= 11
- `v10.x` for Angular >= 10
- `v1.x` for Angular >= 2.x

# Installation

```bash
# if you use npm
npm install layui-laydate -S
npm install ngx-laydate -S

# or if you use yarn
yarn add layui-laydate
yarn add ngx-laydate
```

# Usage

Please refer to the [demo](https://lanxuexing.github.io/ngx-laydate) page.

1. Firstly, import `NgxLaydateModule` in your app module (or any other proper angular module):

   ```typescript
   import { NgxLaydateModule } from 'ngx-laydate';

   @NgModule({
     imports: [
       NgxLaydateModule.forRoot({
         /**
          * This will import all modules from laydate.
          * If you only need custom modules,
          * please refer to [Custom Build] section.
          * PS: Angular Version >= 11 need @ts-ignore or src/types/index.d.ts(declare module 'layui-laydate')
          * Issues Link: https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
          */
         // @ts-ignore
         laydate: () => import('layui-laydate'), // or import path-to-my-custom-laydate')
         path: 'assets/laydate/', // or import path-to-my-custom-laydate')
       }),
     ],
   })
   export class AppModule {}
   ```

2. Then: configure assets in the `angular.json` file.

  ```vim
  {
    architect: {
      ...(PS: build -> options)
          assets: [
            {
              "glob": "**/*",
              "input": "node_modules/layui-laydate/dist/",
              "output": "assets/laydate"
            }
          ]
    }
  }
  ```


3. Then: use `laydate` directive in a input element

   - Simple example:

     - html:

     ```html
     <input laydate [options]="laydateOption" />
     ```

     - component:

     ```typescript

     // ...

     laydateOption = {
       lang: 'en',
       value: '1989-10-14',
       done: (value, date, endDate) => {
        // Get the generated value of the date, for example: 2017-08-18
        console.log(value);seconds: 0}
        // Get the date time object: {year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        console.log(date);
        // Get the end date time object, only returns when range selection is enabled (range: true). The object members are the same as above.
        console.log(endDate);
      }
     };
     ```

# API

### Directive

`laydate` directive support following input properties:

| Input           | Type    | Default | Description
| --------------- | ------- | ------- | -------- |
| `[options]`     | object  | null    | The same as the options on the official demo site. |

### Laydate Instance

For example:

- html:

```html
<input laydate [options]="laydateOptions" #myLaydate="laydate" />
```

- component:

```typescript
@ViewChild('myLaydate', { static: true, read: NgxLaydateDirective }) myLaydateRef: NgxLaydateDirective;

this.options = {
  min: '2016-10-14',
  max: '2080-10-14',
  ready: () => {
    this.myLaydateRef.hint('Date selection is set within the range of <br> October 14, 2016 to October 14, 2080.');
  }
}
```

# Events

As Laydate supports the `'click'` events, our `ngx-laydate` directive also supports the same click events but with an additional `laydate` prefix. For example:

- html:

```html
<input laydate [options]="laydateOptions" (laydateDone)="onDone($event)" />
```

- typescript:

```typescript
onDone([value, date]): void {
  alert('You have selected the date: ' + value + '\nThe obtained object is ' + JSON.stringify(date));
}
```

- The '\$event' is same with the 'params' that Laydate dispatches.

It supports following event outputs:

| @Output                   | Event                                   |
| ------------------------- | --------------------------------------- |
| laydateInit               | Emitted when the laydate is initialized |
| laydateReady              | laydate event: `'ready'`                |
| laydateChange             | laydate event: `'done'`                 |
| laydateDone               | laydate event: `'change'`               |
| laydateClose              | laydate event: `'close'`                |

You can refer to the Laydate tutorial: [Events and Actions in Laydate](https://layui.gitee.io/v2/docs/modules/laydate.html) for more details of the event params. You can also refer to the [demo](https://lanxuexing.github.io/ngx-laydate/) page for a detailed example.

# Demo

You can clone this repo to your working copy and then launch the demo page in your local machine:

```bash
npm install
npm run start

# or
yarn install
yarn start
```

The demo page server is listening on: http://localhost:4200

[npm-badge-url]: https://www.npmjs.com/package/ngx-laydate
