import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { NgxLaydateModule } from 'projects/ngx-laydate/src/lib/ngx-laydate.module';
import { CodeBlockComponent } from './code-block/code-block.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzInputModule } from 'ng-zorro-antd/input';

// 模块
const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  IconsProviderModule,
  // ng-zorro-antd 组件
  NzLayoutModule,
  NzMenuModule,
  NzDropDownModule,
  NzAvatarModule,
  NzButtonModule,
  NzIconModule,
  NzGridModule,
  NzTabsModule,
  NzInputModule,
];

@NgModule({
  declarations: [
    CodeBlockComponent,
  ],
  imports: [
    ...MODULES,
    MarkdownModule.forChild(),
    NgxLaydateModule.forChild(),
  ],
  exports: [
    ...MODULES,
    MarkdownModule,
    NgxLaydateModule,
    CodeBlockComponent,
  ],
})
export class ShareModule { }
