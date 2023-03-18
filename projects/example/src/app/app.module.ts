import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLaydateModule } from 'projects/ngx-laydate/src/lib/ngx-laydate.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLaydateModule.forRoot({
      laydate: import('layui-laydate'),
      path: 'assets/laydate/'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
