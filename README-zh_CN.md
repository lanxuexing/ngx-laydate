<div align="center">

# NgxLaydate

专为现代 Angular 应用打造的 [Laydate](https://github.com/layui/laydate) 指令。

[![NPM package](https://img.shields.io/npm/v/ngx-laydate.svg?style=flat-square)](https://npmjs.org/package/ngx-laydate)
[![GitHub Release Date](https://img.shields.io/github/release-date/lanxuexing/ngx-laydate.svg?style=flat-square)](https://github.com/lanxuexing/ngx-laydate/releases)
[![GitHub repo size](https://img.shields.io/github/repo-size/lanxuexing/ngx-laydate.svg?style=flat-square)](https://github.com/lanxuexing/ngx-laydate)
[![GitHub Stars](https://img.shields.io/github/stars/lanxuexing/ngx-laydate.svg?style=flat-square)](https://github.com/lanxuexing/ngx-laydate/stargazers)
[![CI/CD](https://github.com/lanxuexing/ngx-laydate/actions/workflows/deploy.yml/badge.svg)](https://github.com/lanxuexing/ngx-laydate/actions)
[![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/npm/l/ngx-laydate.svg?style=flat-square)](https://github.com/lanxuexing/ngx-laydate/blob/main/LICENSE)

[English](./README.md) | [简体中文](./README-zh_CN.md)

## 🔗 在线演示
查看组件实际运行效果：**[https://lanxuexing.github.io/ngx-laydate/](https://lanxuexing.github.io/ngx-laydate/)**

</div>

---

## ✨ 特性

- 🚀 **现代 Angular**: 基于 Standalone Directives 构建，完美支持 Angular 16+。
- ⚡ **加载优化**: 智能缓存机制，确保核心库在单次会话中仅加载一次。
- 🧱 **轻松集成**: 流行日期选择器 Laydate (版本 >= 5.x) 的无缝封装。
- 🧩 **配置灵活**: 完全支持 Laydate 的所有原生选项和事件。
- 🎨 **可定制**: 支持自定义主题颜色和路径配置。
- 📦 **轻量级**: 极小的体积开销，专注于高效封装核心功能。
- 🌏 **SSR 友好**: 专为服务器端渲染环境（Server-Side Rendering）安全设计。

## 📦 安装

```bash
# 如果使用 npm
npm install layui-laydate -S
npm install ngx-laydate -S

# 如果使用 yarn
yarn add layui-laydate
yarn add ngx-laydate
```

> **🔥 提示**: 如果想使用 Laydate 的最新特性，可以使用 "laydate-next" 替换 "layui-laydate"，并更新 `angular.json` 中的 assets 依赖配置。

## 🚀 使用指南

### 1. 独立组件（推荐）

在组件中直接导入 `NgxLaydateDirective`：

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
        // 使用标准导入或自定义路径
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
      lang: 'cn', // 中文支持
      type: 'datetime',
      value: '2023-10-14 00:00:00'
   };
}
```

### 2. NgModule（向后兼容）

在模块中导入 `NgxLaydateModule`：

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

### 3. 配置静态资源

在 `angular.json` 中添加 laydate 静态资源配置，以确保主题和样式正确加载。

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

### 指令输入 (Inputs)

| 属性名 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `[options]` | `LaydateOptions` | `null` | 配置对象，于 [Laydate 官方文档](https://layui.dev/docs/2/laydate/) 保持一致。 |

### 事件 (Events)

`ngx-laydate` 代理了原生 Laydate 事件，并添加了 `laydate` 前缀。

| @Output | 描述 |
| :--- | :--- |
| `(laydateInit)` | 当实例初始化完成时触发。 |
| `(laydateReady)` | 当选择器显示时触发 (`ready` 回调)。 |
| `(laydateChange)` | 当值发生变化时触发 (`done` 回调)。 |
| `(laydateDone)` | 同 change 事件，与原生命名保持一致。 |
| `(laydateClose)` | 当选择器关闭时触发 (`close` 回调)。 |

**示例:**

```html
<input laydate [options]="opts" (laydateDone)="onDone($event)" />
```

```typescript
onDone([value, date, endDate]): void {
  console.log('选择的值:', value);
  console.log('日期对象:', date);
}
```

## 🛠️ 本地开发

克隆仓库并启动演示项目：

```bash
npm install
npm run start
```

访问: [http://localhost:4200](http://localhost:4200)

## 🔗 相关链接
- [在线演示](https://lanxuexing.github.io/ngx-laydate)
- [Laydate 官方文档](https://layui.dev/docs/2/laydate/)
- [Laydate 码云仓库](https://gitee.com/layui/laydate)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/lanxuexing">lanxuexing</a></sub>
</div>
