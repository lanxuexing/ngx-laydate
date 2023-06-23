# NgxLaydate

<p align="center">
  <a href="https://github.com/lanxuexing/ngx-laydate/actions"><img src="https://github.com/lanxuexing/ngx-laydate/workflows/build/badge.svg?branch=main" alt="Build Status"></a>
  <a href="https://npmcharts.com/compare/ngx-laydate?minimal=true"><img src="https://img.shields.io/npm/dm/ngx-laydate.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/ngx-laydate"><img src="https://img.shields.io/npm/v/ngx-laydate.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/ngx-laydate"><img src="https://img.shields.io/npm/l/ngx-laydate.svg?sanitize=true" alt="License"></a>
</p>

[Laydate](https://github.com/layui/laydate)（版本 >= 5.x）的 Angular 指令

- [在线演示](https://lanxuexing.github.io/ngx-laydate)
- [在线文档](https://lanxuexing.github.io/ngx-laydate/api-docs)
- [Laydate在线演示](https://layui.gitee.io/v2/demo/laydate.html)
- [Laydate在线文档](https://layui.gitee.io/v2/docs/modules/laydate.html)
- [ngx-laydate 选项文档](API-zh_CN.md)

[English](README.md) | 简体中文

## 目录

- [快速入门](#getting-started)
- [安装](#installation)
- [使用方法](#usage)
- [API](#api)
  - [指令](#directive)
  - [Laydate实例](#laydate-instance)
- [事件](#events)
- [演示](#demo)

# <p id='getting-started'>快速入门</p>

`ngx-laydate` 是适用于 Laydate（版本 >= 5.x）的 Angular（版本 >= 2.x）指令。

最新版本 @npm:

- `v11.x` 适用于 Angular >= 11
- `v10.x` 适用于 Angular >= 10
- `v1.x` 适用于 Angular >= 2.x

# <p id='installation'>安装</p>

```bash
# 使用 npm 安装
npm install layui-laydate -S
npm install ngx-laydate -S

# 或者使用 yarn 安装
yarn add layui-laydate
yarn add ngx-laydate
```

# <p id='usage'>使用方法</p>

请参考 [演示](https://lanxuexing.github.io/ngx-laydate) 页面。

1. 首先，在您的应用模块（或其他适当的 Angular 模块）中导入 `NgxLaydateModule` ：

   ```typescript
   import { NgxLaydateModule } from 'ngx-laydate';

   @NgModule({
     imports: [
       NgxLaydateModule.forRoot({
         /**
          * 这将从 laydate 中导入所有模块。
          * 如果您只需要自定义模块，请参考 [自定义构建] 部分。
          * PS：Angular 版本 >= 11 需要 @ts-ignore 或者 src/types/index.d.ts(declare module 'layui-laydate')。
          * Issues 链接：https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
          */
         // @ts-ignore
         laydate: () => import('layui-laydate'), // or import path-to-my-custom-laydate')
         path: 'assets/laydate/', // or import path-to-my-custom-laydate')
       }),
     ],
   })
   export class AppModule {}
   ```

2. T然后，在 `angular.json` 文件中配置资源（assets）：

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


3. 接下来，在输入元素中使用 `laydate` 指令：

   - 简单示例：

     - html：

     ```html
     <input laydate [options]="laydateOption" />
     ```

     - component：

     ```typescript

     // ...

     laydateOption = {
       lang: 'en',
       value: '1989-10-14',
       done: (value, date, endDate) => {
        // 获取生成的日期值，例如：2017-08-18
        console.log(value);seconds: 0}
        // 获取日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        console.log(date);
         // 仅当启用了范围选择（range: true）时返回结束日期时间对象，对象成员与上述相同
        console.log(endDate);
      }
     };
     ```

🚀 **独立组件**

在独立组件中使用 NgxLaydateModule，可以使用 `NGX_LAYDATE_CONFIG` 令牌来提供 laydate。

```ts
import { NgxLaydateModule, NGX_LAYDATE_CONFIG } from 'ngx-laydate';

@Component({
  standalone: true,
  selector: 'my-laydate',
  template: `
    <input laydate [options]="{}" />
  `,
  imports: [NgxLaydateModule],
  providers: [
    {
      provide: NGX_LAYDATE_CONFIG,
      useFactory: () => ({
        // @ts-ignore
        laydate: () => import('layui-laydate'),
        path: 'assets/laydate/'
      }),
    },
  ]
})
export class MyLaydateComponent {
  // 逻辑
}
```

# <p id='api'>API</p>

### <p id="directive">指令</p>

`laydate` 指令支持以下输入属性：

| Input           | Type    | Default | Description
| --------------- | ------- | ------- | -------- |
| `[options]`     | object  | null    | 与官方演示站点上的选项相同。 |

### <p id='laydate-instance'>Laydate 实例</p>

例如：

- html：

```html
<input laydate [options]="laydateOptions" #myLaydate="laydate" />
```

- component：

```typescript
@ViewChild('myLaydate', { static: true, read: NgxLaydateDirective }) myLaydateRef: NgxLaydateDirective;

this.options = {
  min: '2016-10-14',
  max: '2080-10-14',
  ready: () => {
    this.myLaydateRef.hint('日期选择范围设置为 <br> 2016年10月14日至2080年10月14日。');
  }
}
```

# <p id='events'>事件</p>

由于 Laydate 支持 `'click'` 事件，我们的 `ngx-laydate` 指令也支持相同的点击事件，但是需要在事件前加上 `laydate` 前缀。例如：

- html：

```html
<input laydate [options]="laydateOptions" (laydateDone)="onDone($event)" />
```

- typescript：

```typescript
onDone([value, date]): void {
  alert('您选择的日期是：' + value + '\n获取的对象是：' + JSON.stringify(date));
}
```

- 这个 `$event` 与 Laydate 原有配置的 `params` 相同。

它支持以下事件输出：

| @Output                   | 事件                                   |
| ------------------------- | --------------------------------------- |
| laydateInit               | 当 laydate 初始化时触发 |
| laydateReady              | laydate 事件：`'ready'`                |
| laydateChange             | laydate 事件：`'done'`                 |
| laydateDone               | laydate 事件：`'change'`               |
| laydateClose              | laydate 事件：`'close'`                |

您可以参考 Laydate 教程：[Events and Actions in Laydate](https://layui.gitee.io/v2/docs/modules/laydate.html) 了解事件参数的详细信息。您还可以参考 [演示](https://lanxuexing.github.io/ngx-laydate/) 页面了解详细示例。

# <p id='demo'>演示</p>

您可以克隆此存储库到本地，然后在本地机器上启动演示页面：

```bash
npm install
npm run start

# or
yarn install
yarn start
```

演示页面服务器监听地址： http://localhost:4200

[npm-badge-url]: https://www.npmjs.com/package/ngx-laydate
