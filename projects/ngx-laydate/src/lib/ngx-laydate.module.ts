import { ModuleWithProviders, NgModule } from '@angular/core';

import { NGX_LAYDATE_CONFIG, NgxLaydateConfig, NgxLaydateDirective } from './ngx-laydate.directive';

@NgModule({
  imports: [NgxLaydateDirective],
  exports: [NgxLaydateDirective]
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

export { NGX_LAYDATE_CONFIG, NgxLaydateDirective };
