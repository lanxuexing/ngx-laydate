import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxLaydateConfig, NgxLaydateDirective, NGX_LAYDATE_CONFIG } from './ngx-laydate.directive';

@NgModule({
  imports: [],
  declarations: [ NgxLaydateDirective],
  exports: [ NgxLaydateDirective]
})
export class NgxLaydateModule {
  static forRoot(config?: NgxLaydateConfig): ModuleWithProviders<NgxLaydateModule> {
    return {
      ngModule: NgxLaydateModule,
      providers: [{ provide: NGX_LAYDATE_CONFIG, useValue: config }],
    };
  }
  static forChild() {
    return {
      ngModule: NgxLaydateModule,
    };
  }
}

export { NgxLaydateDirective, NGX_LAYDATE_CONFIG };
