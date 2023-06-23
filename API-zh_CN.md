
## Table of contents - 文档目录

- [快速使用 ▪ use](#use)
- [基础参数选项 ▪ options](#options)
- [绑定元素 ▪ elem](#elem)
- [控件类型 ▪ type](#type)
- [范围选择 ▪ range](#range)
- [自定义格式 ▪ format](#format)
- [初始值 ▪ value](#value)
- [初始值填充 ▪ isInitValue](#isInitValue)
- [定义起始周 ▪ weekStart](#weekStart)
- [选择值预览 ▪ isPreview](#isPreview)
- [最大/小日期 ▪ min/max](#minmax)
- [自定义事件 ▪ trigger](#trigger)
- [默认显示 ▪ show](#show)
- [定位方式 ▪ position](#position)
- [层叠顺序 ▪ zIndex](#zIndex)
- [底部栏 ▪ showBottom](#showBottom)
- [工具按钮 ▪ btns](#btns)
- [语言 ▪ lang](#lang)
- [主题 ▪ theme](#theme)
- [公历节日 ▪ calendar](#calendar)
- [标注重要日子 ▪ mark](#mark)
- [标注节假日 ▪ holidays](#holidays)
- [组件初始打开的回调 ▪ onready](#onready)
- [日期被切换的回调 ▪ onchange](#onchange)
- [选择完毕的回调 ▪ ondone](#ondone)
- [面板被关闭的回调 ▪ onclose](#onclose) 
- [弹出提示 ▪ hint](#hint)
- [配置基础路径 ▪ path](#path)


## laydate document - 日期和时间组件文档


### <p id='use'>use - 快速使用</p>

这是一个最简单的示例：

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate />
  `,
  styles: [``]
})
export class DemoComponent { }
```


### <p id='options'>options - 基础参数选项</p>

通过方法：_laydate.set(options)_ 来设定全局基础参数.

组件中使用options Input()属性：
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: [``]
})
export class DemoComponent {
  options = {
    lang: 'en'
  }
}
```


### <p id='elem'>elem - 绑定元素</p>

类型：_String/DOM_，默认值：_无_

_**可选项**_，用于绑定执行日期渲染的元素，值一般为选择器，或DOM对象，在 **laydate** 指令下自动绑定，传入elem属性则自动覆盖laydate绑定的dom元素

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: [``]
})
export class DemoComponent {
  options = {
    elem: '#test' //或 elem: document.getElementById('test')、elem: lay('#test') 等
  }
}
```


### <p id='type'>type - 控件选择类型</p>

类型：_String_，默认值：_date_

用于单独提供不同的选择器类型，可选值如下表：

| type可选值 | 名称 | 用途 |
| --- | --- | --- |
| year | 年选择器 | 只提供年列表选择 |
| month | 年月选择器 | 只提供年、月选择 |
| date | 日期选择器 | 可选择：年、月、日。type默认值，一般可不填 |
| time | 时间选择器 | 只提供时、分、秒选择 |
| datetime | 日期时间选择器 | 可选择：年、月、日、时、分、秒 |

```ts
// 年选择器
options = { 
  type: 'year'
};
 
// 年月选择器
options = { 
  type: 'month'
};
 
// 日期选择器
options = { 
  // type: 'date' // 默认，可不填
};
 
// 时间选择器
options = { 
  type: 'time'
};
 
// 日期时间选择器
options = { 
  type: 'datetime'
};
```


### <p id='range'>range - 开启左右面板范围选择</p>

类型：_Boolean/String/Array_，默认值：_false_

如果设置 _true_，将默认采用 “ - ” 分割。 你也可以直接设置 _分割字符_。五种选择器类型均支持左右面板的范围选择。

```ts
//日期范围选择
loptions = { 
  range: true // 或 range: '~' 来自定义分割字符
};
 
//日期时间范围选择
loptions = { 
  type: 'datetime',
  range: true
};
 
// 时间范围选择
loptions = { 
  type: 'time',
  range: true
};
 
// 年范围选择
loptions = { 
  type: 'year',
  range: true
};
 
// 年月范围选择
loptions = { 
  type: 'month',
  range: true
};
```

如果您要将开始时间和结束时间分开，那么还可以将 range 参数设置为数组，如：

```html
<div>
  <div>
    <label>日期范围</label>
    <div id="test-range">
      <div>
        <input type="text" id="startDate" placeholder="开始日期">
      </div>
      <div>-</div>
      <div>
        <input type="text" id="endDate" placeholder="结束日期">
      </div>
    </div>
  </div>
</div>
<script>
options = { 
  elem: '#test-range' // 开始时间和结束时间所在 input 框的父选择器
  // 设置开始日期、日期日期的 input 选择器
  ,range: ['#startDate', '#endDate'] // 数组格式为 layui 2.6.6 开始新增
};
</script>
```


### <p id='format'>format - 自定义格式</p>

类型：_String_，默认值：_yyyy-MM-dd_

通过日期时间各自的格式符和长度，来设定一个你所需要的日期格式。layDate 支持的格式如下：

| 格式符 | 说明 |
| --- | --- |
| yyyy | 年份，至少四位数。如果不足四位，则前面补零 |
| y | 年份，不限制位数，即不管年份多少位，前面均不补零 |
| MM | 月份，至少两位数。如果不足两位，则前面补零。 |
| M | 月份，允许一位数。 |
| dd | 日期，至少两位数。如果不足两位，则前面补零。 |
| d | 日期，允许一位数。 |
| HH | 小时，至少两位数。如果不足两位，则前面补零。 |
| H | 小时，允许一位数。 |
| mm | 分钟，至少两位数。如果不足两位，则前面补零。 |
| m | 分钟，允许一位数。 |
| ss | 秒数，至少两位数。如果不足两位，则前面补零。 |
| s | 秒数，允许一位数。 |

通过上述不同的格式符组合成一段日期时间字符串，可任意排版，如下所示：

| 格式 | 示例值 |
| --- | --- |
| yyyy-MM-dd HH:mm:ss | 2017-08-18 20:08:08 |
| yyyy年MM月dd日 HH时mm分ss秒 | 2017年08月18日 20时08分08秒 |
| yyyyMMdd | 20170818 |
| dd/MM/yyyy | 18/08/2017 |
| yyyy年M月 | 2017年8月 |
| M月d日 | 8月18日 |
| 北京时间：HH点mm分 | 北京时间：20点08分 |
| yyyy年的M月某天晚上，大概H点 | 2017年的8月某天晚上，大概20点 |

```ts
// 自定义日期格式
options = { 
  format: 'yyyy年MM月dd日' // 可任意组合
};
```


### <p id='value'>value - 初始值</p>

类型：_String_，默认值：_new Date()_

支持传入符合format参数设定的日期格式字符，或者 new Date()

```ts
// 传入符合format格式的字符给初始值
options = { 
  value: '2018-08-18' // 必须遵循format参数设定的格式
};
 
// 传入Date对象给初始值
options = { 
  value: new Date(1534766888000) // 参数即为：2018-08-20 20:08:08 的毫秒数
};
```


### <p id='isInitValue'>isInitValue - 初始值填充</p>

类型：_Boolean_，默认值：_true_

用于控制是否自动向元素填充初始值（需配合 value 参数使用）

```ts
options = {
  value: '2017-09-10',
  isInitValue: false // 是否允许填充初始值，默认为 true
};
```


### <p id='weekStart'>weekStart - 定义起始周</p>

类型：_Number_，默认值：_0_（即周日）

```ts
options = {
  weekStart: 1 // 设置周一为起始周
};
```


### <p id='isPreview'>isPreview - 是否开启选择值预览</p>

类型：_Boolean_，默认值：_true_

用于控制是否显示当前结果的预览（type 为 datetime 时不开启）

```ts
options = {
  isPreview: false // 禁用面板左下角选择值的预览，默认 true
};
```


### <p id='minmax'>min/max - 最小/大范围内的日期时间值</p>

类型：_string_，默认值：_min: '1900-1-1'_、_max: '2099-12-31'_

设定有限范围内的日期或时间值，_不在范围内的将不可选中_。这两个参数的赋值非常灵活，主要有以下几种情况：

<table>
<tbody>
<tr>
<td>1.</td>
<td>若值为字符类型，则：<em>年月日必须用 -（中划线）分割</em>、<em>时分秒必须用 :（半角冒号）号分割</em>。这里并非遵循 format 设定的格式</td>
</tr>
<tr>
<td>2.</td>
<td>若值为整数类型，且数字 ＜ 86400000，则数字代表天数，如：min: -7，即代表最小日期在7天前，正数代表若干天后</td>
</tr>
<tr>
<td>3.</td>
<td>若值为整数类型，且数字 ≥ 86400000，则数字代表毫秒数，如：max: 4073558400000，即代表最大日期在：公元3000年1月1日</td>
</tr>
</tbody>
</table>

```ts
// 日期有效范围只限定在：2017年
options = { 
  min: '2017-1-1',
  max: '2017-12-31'
};
 
// 日期有效范围限定在：过去一周到未来一周
options = { 
  min: -7, // 7天前
  max: 7 // 7天后
};
 
// 日期时间有效范围的设定: 
options = { 
  type: 'datetime',
  min: '2017-8-11 12:30:00',
  max: '2017-8-18 12:30:00'
};
 
// 时间有效范围设定在: 上午九点半到下午五点半
options = { 
  type: 'time',
  min: '09:30:00',
  max: '17:30:00'
};
```

毫不保留地说，min和max参数是两个非常强大的存在，合理运用，可帮助用户在日期与时间的选择上带来更为友好的约束与体验。


### <p id='trigger'>trigger - 自定义弹出控件的事件</p>

类型：_String_，默认值：_focus_，如果绑定的元素非输入框，则默认事件为：click

```ts
// 自定义事件
options = { 
  trigger: 'click' // 采用click弹出
};
```


### <p id='show'>show - 默认显示</p>

类型：_Boolean_，默认值：_false_

如果设置: _true_，则控件默认显示在绑定元素的区域。通常用于外部事件调用控件，如：

```ts
// 默认显示
options = {
  show: true // 直接显示
};

// 假设这是一个按钮点击事件
onClick(): void {
  this.options = {
    elem: '#test'
    ,show: true // 直接显示
    ,closeStop: '#test1' // 这里代表的意思是：点击 test1 所在元素阻止关闭事件冒泡。如果不设定，则无法弹出控件
  };
}
```


### <p id='position'>position - 定位方式</p>

类型：_String_，默认值：_absolute_

用于设定控件的定位方式，有以下三种可选值：

 
| position 可选值 | 说明 |
| --- | --- |
| absolute | 绝对定位，始终吸附在绑定元素周围。默认值 |
| fixed | 固定定位，初始吸附在绑定元素周围，不随浏览器滚动条所左右。_一般用于在固定定位的弹层中使用。_ |
| static | 静态定位，控件将直接嵌套在指定容器中。  
注意：_请勿与 show 参数的概念搞混淆。show为 true 时，控件仍然是采用绝对或固定定位。而这里是直接嵌套显示_ |

下面是一个直接嵌套显示的例子：

```ts
【HTML】
<span id="testView"></span>
<div id="test2"></div>
 
【JS】: 
// 嵌套在指定容器中
options = {
  elem: '#test2'
  ,position: 'static'
  ,change: function(value, date){ // 日期被切换的回调
    lay('#testView').html(value);
  }
};
```


### <p id='zIndex'>zIndex - 层叠顺序</p>

类型：_Number_，默认值：_66666666_

一般用于解决与其它元素的互相被遮掩的问题。如果 position 参数设为 static 时，该参数无效。

```ts
// 设定控的层叠顺序
options = {
  zIndex: 99999999
};
```


### <p id='showBottom'>showBottom - 是否显示底部栏</p>

类型：_Boolean_，默认值：_true_

如果设置 _false_，将不会显示控件的底部栏区域

```ts
// 不显示底部栏
options = {
  showBottom: false
};
```


### <p id='btns'>btns - 工具按钮</p>

类型：_Array_，默认值：_\['clear', 'now', 'confirm'\]_

右下角显示的按钮，会按照数组顺序排列，内置可识别的值有：clear、now、confirm

```ts
// 只显示清空和确认
options = {
  btns: ['clear', 'confirm']
};
```


### <p id='lang'>lang - 语言</p>

类型：_String_，默认值：_cn_

我们内置了两种语言版本：_cn_（中文版）、_en_（国际版，即英文版）。这里并没有开放自定义文字，是为了避免繁琐的配置。

```ts
// 国际版
options = {
  lang: 'en'
};
```


### <p id='theme'>theme - 主题</p>

类型：_String_，默认值：_default_

我们内置了多种主题，theme的可选值有：_default_（默认简约）、_molv_（墨绿背景）、_#颜色值_（自定义颜色背景）、_grid_（格子主题）

```ts
// 墨绿背景主题
options = {
  theme: 'molv'
};
 
// 自定义背景色主题 - 非常实用
options = {
  theme: '#393D49'
};
 
// 格子主题
options = {
  theme: 'grid'
};
```

另外，你还可以传入其它字符，如：theme: 'xxx'，那么控件将会多出一个 _class="laydate-theme-xxx"_ 的CSS类，以便于你单独定制主题。


### <p id='calendar'>calendar - 是否显示公历节日</p>

类型：_Boolean_，默认值：_false_

我们内置了一些我国通用的公历重要节日，通过设置 _true_ 来开启。国际版不会显示。

```ts
// 允许显示公历节日
options = {
  calendar: true
};
```


### <p id='mark'>mark - 标注重要日子</p>

类型：_Object_，默认值：_无_

calendar 参数所代表的公历节日更多情况下是一个摆设。因此，我们还需要自定义标注重要日子，比如结婚纪念日？日程等？它分为以下几种：

  
| 标注 | 示例 | 说明 |
| --- | --- | --- |
| 每年的日期 | {'0-9-10': '教师'} | 0 即代表每一年 |
| 每月的日期 | {'0-0-15': '中旬'} | 0-0 即代表每年每月 |
| 特定的日期 | {'2017-8-21': '发布') | \- |

可同时设定多个，如：

```ts
// 标注重要日子
options = {
  mark: {
    '0-10-14': '生日'
    ,'0-12-31': '跨年' // 每年12月31日
    ,'0-0-10': '工资' // 每个月10号
    ,'2017-8-15': '' // 具体日期
    ,'2017-8-20': '预发' // 如果为空字符，则默认显示数字+徽章
    ,'2017-8-21': '发布'
  },
  done: (value, date) => {
    if (date.month === 10 && date.date === 14) { // 点击每年的10月14日，弹出提示语
      ins1.hint('生日啦');
    }
  }
};
```

非常实用的存在，是时候利用它制作你的日程表了。


### <p id='holidays'>holidays - 标注节假日及补班日</p>

类型：_Array_，默认值：_无_

若开启标注，其值是一个二维数组

```ts
// 示例
options = {
  holidays: [
    // 2022 年的节假日，可参见国家每年公布的法定节假日安排
    ['2022-1-1','2022-1-2','2022-1-3'], // …
    // 2022 年的补班日
    ['2022-1-29','2022-1-30'] // …
  ]
};
```


### <p id='onready'>onready - 控件初始打开的回调</p>

控件在打开时触发，回调返回一个参数：_初始的日期时间对象_

```ts
options = {
  ready: (date) => {
    console.log(date); // 得到初始的日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
  }
};
```


### <p id='onchange'>onchange - 日期时间被切换后的回调</p>

年月日时间被切换时都会触发。回调返回三个参数，分别代表：_生成的值_、_日期时间对象_、_结束的日期时间对象_

```ts
options = {
  change: (value, date, endDate) => {
    console.log(value); // 得到日期生成的值，如：2017-08-18
    console.log(date); // 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); // 得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  }
};
```


### <p id='ondone'>ondone - 控件选择完毕后的回调</p>

点击日期、清空、现在、确定均会触发。回调返回三个参数，分别代表：_生成的值_、_日期时间对象_、_结束的日期时间对象_

```ts
options = {
  done: (value, date, endDate) => {
    console.log(value); // 得到日期生成的值，如：2017-08-18
    console.log(date); // 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    console.log(endDate); // 得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
  }
};
```


### <p id='onclose'>onclose - 组件被关闭的回调</p>

组件面板被完全关闭（移除）后触发

```ts
options = {
  elem: '#test'
  ,done: (value, date, endDate) => { // 选择完毕的回调
    // …
  }
  ,close: (that) => { // 关闭后的回调
    // …
  }
};
```


### <p id='hint'>hint - 弹出控件提示</p>

事实上，执行核心方法 _laydate.render(options)_ 会返回一个当前实例对象。其中包含一些成员属性和方法，比如：hint方法

```ts
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" #myLaydate="laydate" />
  `,
  styles: [``]
})
export class DemoComponent {
  @ViewChild('myLaydate', { static: true, read: NgxLaydateDirective }) myLaydateRef: NgxLaydateDirective;

  options = {
    change: (value, date, endDate) => {
      this.myLaydateRef.hint(value); // 在控件上弹出value值
    }
  };
}
```


### <p id='path'>path - 配置基础路径</p>

你需要设置基础路径，以便 laydate.css 完成加载。动态加载 `laydate`之前预先定义一个我们约定好的全局对象：

```
<script>  
var LAYUI\_GLOBAL = {
  laydate\_dir: '/res/laydate/' //laydate 所在目录（laydate 5.3.0 开始新增）
};
</script>
```

> 提示：LAYUI\_GLOBAL 设定的 laydate\_dir 优先级高于 指令内部定义的path；

