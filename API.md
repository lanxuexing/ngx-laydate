## Table of contents

- [Quick start ● use](#use)
- [Basic params ● options](#options)
- [Bind Elements ● elem](#elem)
- [Control type ● type](#type)
- [Range selection ● range](#range)
- [Custom format ● format](#format)
- [Initial value ● value](#value)
- [Fill in the initial value ● isInitValue](#isInitValue)
- [Define the start of the week ● weekStart](#weekStart)
- [Select value preview ● isPreview](#isPreview)
- [Maximum/minimum date ● min/max](#minmax)
- [Custom events -「trigger](#trigger)
- [Default display ● show](#show)
- [Positioning method● position](#position)
- [Stacking order ● zIndex](#zIndex)
- [Bottom bar ● showBottom](#showBottom)
- [Tool buttons ● btns](#btns)
- [Language ● lang](#lang)
- [Theme ● theme](#theme)
- [Gregorian calendar holidays ● calendar](#calendar)
- [Mark important days ● mark](#mark)
- [Mark holidays ● holidays](#holidays)
- [Callback when component is initially opened ● onready](#onready)
- [Callback Callback when date is switching ● onchange](#onchange)
- [Callback function after selecting a date ● ondone](#ondone)
- [Callback when component is closed ● onclose](#onclose)
- [Display hint text ● hint](#hint)
- [Set the path of the date picker assets ● path](#path)

## laydate document


### <p id='use'>use - Quick start</p>

Here is a simple example:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate />
  `,
  styles: []
})
export class DemoComponent { }
```


### <p id='options'>options - Basic params</p>

Use the method _`laydate.set(options)`_ to set global basic parameters.

Using the options Input() Property in Components:
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    lang: 'en'
  };
}
```


### <p id='elem'>elem - Bind Elements</p>

Type: _String/DOM_, Default: _none_

_**Optional**_. Used to bind the element for rendering the date. The value is generally a selector or a DOM object. Automatically bound under the **laydate** directive. Automatic Overriding of DOM Elements Bound by Laydate by Passing the elem Attribute

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    elem: '#test' // or elem: document.getElementById('test') or elem: lay('#test'), etc.
  };
}
```


### <p id='type'>type - Control type</p>

Type: _String_, Default: _date_

_**Optional**_. Used to provide different selector types. The available values are as follows:

| Optional Type Values | Name | Purpose |
| --- | --- | --- |
| year | Year Selector | Only provides a list of years to choose from |
| month | Year and Month Selector | Only provides year and month selection |
| date | Date Selector | Can select year, month, and day. Default value for type, can be omitted |
| time | Time Selector | Only provides hour, minute, and second selection |
| datetime | Date and Time Selector | Provides year, month, day, hour, minute, and second selection |

```ts
// Year Selector
options = { 
  type: 'year'
};
 
// Year and Month Selector
options = { 
  type: 'month'
};
 
// Date Selector
options = { 
  // type: 'date' // Default value for type, can be omitted
};
 
// Time Selector
options = { 
  type: 'time'
};
 
// Date and Time Selector
options = { 
  type: 'datetime'
};
```


### <p id='range'>range - Range selection</p>

Type: _Boolean/String/Array_, Default: _false_

_**Optional**_. Used to set whether to enable range selection. When set to `true`, it means that a range of dates can be selected, it will default to using "-" as the separator. You can also directly set the separator character. All five selector types support range selection with left and right panels.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    range: true, Or range: '~' to customize the separator character
  };
}
```

If you want to separate the start time and end time, you can also set the range parameter as an array, like this:


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
  elem: '#test-range' // Parent Selector of the Input Fields for Start Time and End Time
  // Set Input Selectors for Start Date and End Date
  ,range: ['#startDate', '#endDate'] // The array format is introduced in layui 2.6.6 and onwards.
};
</script> 
```


### <p id='format'>format - Custom format</p>

Type: _String_, Default: _yyyy-MM-dd_

_**Optional**_. Used to set the format of the selected date. You can customize the format according to your needs. The format supports the following special characters:

| Special character | Explanation | Example |
| --- | --- | --- |
| yyyy | 4-digit year | 2023 |
| y | The year is the minimum number of digits | 23 |
| MM | 2-digit month | 06 |
| M | The month is the minimum number of digits | 6 |
| dd | 2-digit day | 22 |
| d | The day is the minimum number of digits | 22 |
| HH | 2-digit hour | 13 |
| H | The hour is the minimum number of digits | 13 |
| mm | 2-digit minute | 30 |
| m | The minute is the minimum number of digits | 30 |
| ss | 2-digit second | 00 |
| s | The second is the minimum number of digits | 0 |

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    format: 'yyyy-MM-dd HH:mm:ss'
  };
}
```


### <p id='value'>value - Initial value</p>

Type: _String_, Default: _''_

_**Optional**_. Used to set the initial value of the date input box. The initial value must conform to the format specified by the `format` parameter.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    value: '2023-06-22'
  };
}
```


### <p id='isInitValue'>isInitValue - Fill in the initial value</p>

Type: _Boolean_, Default: _true_

_**Optional**_. Used to set whether to fill in the initial value when selecting a date. When set to `true`, it means that the initial value will be filled in automatically when selecting a date.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    isInitValue: false
  };
}
```


### <p id='weekStart'>weekStart - Define the start of the week</p>

Type: _Number_, Default: _1_

_**Optional**_. Used to define the start day of the week. The available values are as follows:

| Value | Explanation |
| --- | --- |
| 0 | Sunday |
| 1 | Monday |
| 2 | Tuesday |
| 3 | Wednesday |
| 4 | Thursday |
| 5 | Friday |
| 6 | Saturday |

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    weekStart: 0 // Sunday as the start of the week
  };
}
```


### <p id='isPreview'>isPreview - Select value preview</p>

Type: _Boolean_, Default: _true_

_**Optional**_. Used to set whether to display the selected value as a preview in the input box. When set to `true`, the selected value will be displayed in the input box as a preview.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    isPreview: false
  };
}
```


### <p id='minmax'>min/max - Maximum/minimum date</p>

Type: _String_, Default: _none_

_**Optional**_. Used to set the maximum and minimum selectable dates. The value must conform to the format specified by the `format` parameter.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    min: '2023-06-01',
    max: '2023-06-30'
  };
}
```

To set a limited range of selectable dates or times, you can use the following flexible assignments for these two parameters:

- If the value is of type string: The year, month, and day must be separated by "-" (hyphen), and the hours, minutes, and seconds must be separated by ":" (colon). This format does not necessarily follow the format set by the format option.
- If the value is of type integer and the number is less than 86400000, the number represents the number of days. For example, min: -7 represents a minimum date that is 7 days ago. Positive numbers represent future dates.
- If the value is of type integer and the number is greater than or equal to 86400000, the number represents milliseconds. For example, max: 4073558400000 represents a maximum date of January 1, 3000 AD.

```ts
// The date range is limited to the year 2017.
options = { 
  min: '2017-1-1',
  max: '2017-12-31'
};
 
// The date range is limited to the past week to the future week.
options = { 
  min: -7, // 7 days ago
  max: 7 // 7 days later
};
 
// Setting the Range for Date and Time:
options = { 
  type: 'datetime',
  min: '2017-8-11 12:30:00',
  max: '2017-8-18 12:30:00'
};
 
// Setting the Range for Time:
options = { 
  type: 'time',
  min: '09:30:00',
  max: '17:30:00'
};
```


### <p id='trigger'>trigger - Custom events</p>

Type: _String_, Default: _click_

_**Optional**_. Used to set the event that triggers the date picker to pop up. The available values are as follows:

| Value | Explanation |
| --- | --- |
| click | Click event |
| focus | Focus event |
| hover | Hover event |
| down | Mouse down event |

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (click)="onClick()" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    trigger: 'click'
  };

  onClick() {
    // Handle click event
  }
}
```


### <p id='show'>show - Default display</p>

Type: _Boolean_, Default: _false_

_**Optional**_. Used to set whether to display the date picker by default when the page loads. When set to `true`, the date picker will be displayed by default when the page loads.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    show: true
  };
}
```


### <p id='position'>position - Positioning method</p>

Type: _String_, Default: _absolute_

_**Optional**_. Used to set the positioning method of the date picker. The available values are as follows:

| Value | Explanation |
| --- | --- |
| absolute | Absolute positioning |
| fixed | Fixed positioning |
| static | Static positioning |

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    position: 'fixed'
  };
}
```


### <p id='zIndex'>zIndex - Stacking order</p>

Type: _Number_, Default: _66666666_

_**Optional**_. Used to set the stacking order of the date picker. The higher the value, the higher the stacking order. If there are overlapping elements on the page, you can adjust the stacking order to ensure that the date picker is displayed on top.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    zIndex: 999999
  };
}
```


### <p id='showBottom'>showBottom - Bottom bar</p>

Type: _Boolean_, Default: _true_

_**Optional**_. Used to set whether to display the bottom bar of the date picker. When set to `true`, the bottom bar will be displayed, which includes buttons such as "Clear" and "Today".

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    showBottom: false
  };
}
```


### <p id='btns'>btns - Tool buttons</p>

Type: _Array_, Default: _['clear', 'now', 'confirm']_

_**Optional**_. Used to set the buttons displayed in the bottom bar of the date picker. You can customize the buttons according to your needs. The available values are as follows:

| Value | Explanation |
| --- | --- |
| clear | Clear button |
| now | Today button |
| confirm | Confirm button |
| custom | Custom button |

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    btns: ['clear', 'now']
  };
}
```


### <p id='lang'>lang - Language</p>

Type: _String/Object_, Default: _cn_

_**Optional**_. Used to set the language of the date picker. You can specify a language code or provide an object with customized language strings. By default, Chinese (cn) is used.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (change)="onChange($event)" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    lang: 'en' // Engulsh language
  };

  onChange(event: any) {
    console.log(event);
  }
}
```


### <p id='theme'>theme - Theme</p>

Type: _String_, Default: _default_

_**Optional**_. Used to set the theme of the date picker. The available themes are as follows:

| Value | Explanation |
| --- | --- |
| default | Default theme |
| grid | Grid theme |
| molv | Moss Green theme |
| #RGB | Custom Color theme |

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (change)="onChange($event)" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    theme: 'grid'
  };

  onChange(event: any) {
    console.log(event);
  }
}
```


### <p id='calendar'>calendar - Gregorian calendar holidays</p>

Type: _Object_, Default: _none_

_**Optional**_. Used to set the Gregorian calendar holidays. You can customize the holiday text according to your needs. The object keys are the holiday dates in the format 'MM-dd', and the values are the corresponding holiday names.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (change)="onChange($event)" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    calendar: {
      '01-01': "New Year's Day",
      '12-25': 'Christmas Day'
    }
  };

  onChange(event: any) {
    console.log(event);
  }
}
```


### <p id='mark'>mark - Mark important days</p>

Type: _Object_, Default: _none_

_**Optional**_. Used to mark important days on the date picker. You can customize the mark text and style according to your needs. The object keys are the marked dates in the format 'yyyy-MM-dd', and the values are objects containing the mark text and CSS styles.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (change)="onChange($event)" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    mark: {
      '2023-06-22': {
        text: 'Important',
        style: 'color: red;'
      }
    }
  };

  onChange(event: any) {
    console.log(event);
  }
}
```


### <p id='holidays'>holidays - Mark holidays</p>

Type: _Array_, Default: _none_

_**Optional**_. Used to mark holidays on the date picker. You can customize the holiday text and style according to your needs. Each item in the array is an object containing the holiday date in the format 'yyyy-MM-dd', the holiday name, and CSS styles.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (change)="onChange($event)" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    holidays: [
      {
        date: '2023-01-01',
        name: "New Year's Day",
        style: 'color: red;'
      },
      {
        date: '2023-12-25',
        name: 'Christmas Day',
        style: 'color: green;'
      }
    ]
  };

  onChange(event: any) {
    console.log(event);
  }
}
```


### <p id='onready'>onready - Callback when component is initially opened</p>

Type: _Function_, Default: _none_

_**Optional**_. Used to specify a callback function that will be called when the date picker component is initially opened.

```ts
import { Component } from '@angular/core';

@Component({
  selector:

 'app-demo',
  template: `
    <input laydate [options]="options" (laydateReady)="onReady()" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    ready: () => {
      console.log('Date picker ready');
    }
  };

  onReady() {
    // Handle date picker ready event
  }
}
```


### <p id='onchange'>onchange - Callback when date is switching</p>

Type: _Function_, Default: _none_

_**Optional**_. Used to specify a callback function that will be called when a date is selected or cleared in the date picker.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (laydateChange)="onchange($event)" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    change: (value: string) => {
      console.log('Selected date:', value);
    }
  };

  onChange([value, date]) {
    // Handle date selection change event
  }
}
```


### <p id='ondone'>ondone - Callback function after selecting a date</p>

Type: _function_, Default: _none_

_**Optional**_. Specifies a callback function that will be executed after the user selects a date. The function will receive the selected date as a parameter.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (laydateDone)="ondone($event)" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    done: (date: Date) => {
      console.log('Selected date:', date);
      // Perform additional actions with the selected date
    }
  };

  ondone([value, date]) {
    // Handle date selection done event
  }
}
```

The `ondone` function can be used to perform additional actions or handle the selected date as needed. You can customize the function according to your requirements.


### <p id='onclose'>onclose - Callback when component is closed</p>

Type: _Function_, Default: _none_

Optional. Used to specify a callback function that will be called when the date picker component is closed.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <input laydate [options]="options" (laydateClose)="onClose()" />
  `,
  styles: []
})
export class DemoComponent {
  options = {
    close: () => {
      console.log('Date picker closed');
    }
  };

  onClose() {
    // Handle date picker close event
  }
}
```


### <p id='hint'>hint - Display hint text</p>

Type: _string_, Default: _none_

_**Optional**_. Used to display hint text in the date picker input field. The hint text provides additional information or instructions to the user.

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
      this.myLaydateRef.hint(value); // Displaying the value on the control popover
    }
  };
}
```


### <p id='path'>path - Set the path of the date picker assets</p>

Type: _string_, Default: _none_

_**Optional**_. Used to set the path of the date picker assets (JavaScript and CSS files). This is useful when you need to specify a custom path for the assets.

```ts
import { NgxLaydateModule } from 'ngx-laydate';

@NgModule({
  imports: [
    ...,
    NgxLaydateModule.forRoot({
    /**
     * PS: Angular Version >= 11 need @ts-ignore or src/types/index.d.ts(declare module 'layui-laydate')
     * Issues Link: https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
     */
     // @ts-ignore
     laydate: () => import('layui-laydate'), // or import path-to-my-custom-laydate')
     path: 'assets/laydate/', // or import path-to-my-custom-laydate')
    })
  ],
})
export class AppModule { }
```

Global settings (not recommended)：

```html
<script>
var LAYUI_GLOBAL = {
  laydate_dir: '/res/laydate/' // laydate dir
};
</script>
```

Please note that you may need to adjust the file paths based on your project's folder structure and asset locations.