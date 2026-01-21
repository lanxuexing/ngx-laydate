<div align="center">

# NgxLaydate

The Angular Directive for [Laydate](https://github.com/layui/laydate), built for modern Angular applications.

[![NPM package](https://img.shields.io/npm/v/ngx-laydate.svg?style=flat-square)](https://npmjs.org/package/ngx-laydate)
[![GitHub Release Date](https://img.shields.io/github/release-date/lanxuexing/ngx-laydate.svg?style=flat-square)](https://github.com/lanxuexing/ngx-laydate/releases)
[![GitHub repo size](https://img.shields.io/github/repo-size/lanxuexing/ngx-laydate.svg?style=flat-square)](https://github.com/lanxuexing/ngx-laydate)
[![GitHub Stars](https://img.shields.io/github/stars/lanxuexing/ngx-laydate.svg?style=flat-square)](https://github.com/lanxuexing/ngx-laydate/stargazers)
[![CI/CD](https://github.com/lanxuexing/ngx-laydate/actions/workflows/deploy.yml/badge.svg)](https://github.com/lanxuexing/ngx-laydate/actions)
[![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/npm/l/ngx-laydate.svg?style=flat-square)](https://github.com/lanxuexing/ngx-laydate/blob/main/LICENSE)

[English](./README.md) | [简体中文](./README-zh_CN.md)

## 🔗 Live Demo
Check out the component in action: **[https://lanxuexing.github.io/ngx-laydate/](https://lanxuexing.github.io/ngx-laydate/)**

</div>

---

## ✨ Features

- 🚀 **Modern Angular**: Built with Standalone Directives, supporting Angular 16+.
- ⚡ **Optimized Loading**: Smart caching ensures the core library is loaded only once per session.
- 🧱 **Easy Integration**: Seamless wrapper for the popular Laydate picker (versions >= 5.x).
- 🧩 **Flexible Configuration**: Full access to all native Laydate options and events.
- 🎨 **Customizable**: Determine your own theme color and path configuration.
- 📦 **Lightweight**: Minimal overhead, focusing on wrapping the core functionality efficiently.
- 🌏 **SSR Friendly**: Designed to work safely in Server-Side Rendering environments.

## 📦 Installation

```bash
# if you use npm
npm install layui-laydate -S
npm install ngx-laydate -S

# or if you use yarn
yarn add layui-laydate
yarn add ngx-laydate
```

> **🔥 Pro Tip**: To utilize the latest Laydate features, replace "layui-laydate" with "laydate-next" and update the asset dependencies in your `angular.json` file.

## 🚀 Usage

### 1. Standalone Component (Recommended)

Import `NgxLaydateDirective` directly in your component:

```typescript
import { NgxLaydateDirective, NGX_LAYDATE_CONFIG } from 'ngx-laydate';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NgxLaydateDirective],
  providers: [
    {
      provide: NGX_LAYDATE_CONFIG,
      useFactory: () => ({
        // Use standard import or custom path
        // @ts-ignore
        laydate: () => import('layui-laydate'), 
        path: 'assets/laydate/'
      }),
    },
  ],
  template: `
    <input laydate [options]="laydateOption" />
  `
})
export class AppComponent {
   laydateOption = {
      lang: 'en',
      type: 'datetime',
      value: '2023-10-14 00:00:00'
   };
}
```

### 2. NgModule (Backwards Compatibility)

Import `NgxLaydateModule` in your module:

```typescript
import { NgxLaydateModule } from 'ngx-laydate';

@NgModule({
  imports: [
    NgxLaydateModule.forRoot({
      // @ts-ignore
      laydate: () => import('layui-laydate'), 
      path: 'assets/laydate/'
    }),
  ],
})
export class AppModule {}
```

### 3. Configure Assets

Add the laydate assets to your `angular.json`. This ensures themes and styles load correctly.

```json
{
  "architect": {
    "build": {
      "options": {
        "assets": [
          {
            "glob": "**/*",
            "input": "node_modules/layui-laydate/dist/",
            "output": "assets/laydate"
          }
        ]
      }
    }
  }
}
```

## 📖 API

### Directive Inputs

| Input | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `[options]` | `LaydateOptions` | `null` | Configuration object matching the [official Laydate documentation](https://layui.dev/docs/2/laydate/). |

### Events

`ngx-laydate` proxies native Laydate events with a `laydate` prefix.

| @Output | Description |
| :--- | :--- |
| `(laydateInit)` | Emitted when the instance is initialized. |
| `(laydateReady)` | Emitted when the picker is displayed (`ready` callback). |
| `(laydateChange)` | Emitted when the value changes (`done` callback). |
| `(laydateDone)` | Same as change, consistent with native naming. |
| `(laydateClose)` | Emitted when the picker is closed (`close` callback). |

**Example:**

```html
<input laydate [options]="opts" (laydateDone)="onDone($event)" />
```

```typescript
onDone([value, date, endDate]): void {
  console.log('Selected:', value);
  console.log('Date Object:', date);
}
```

## 🛠️ Development

Clone the repo and start the demo:

```bash
npm install
npm run start
```

Visit: [http://localhost:4200](http://localhost:4200)

## 🔗 Links
- [Online Demo](https://lanxuexing.github.io/ngx-laydate)
- [Official Laydate Docs](https://layui.dev/docs/2/laydate/)
- [Laydate Gitee](https://gitee.com/layui/laydate)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/lanxuexing">lanxuexing</a></sub>
</div>
