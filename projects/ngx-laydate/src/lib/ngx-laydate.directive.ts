import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { ChangeFilter } from './change-filter';
import { normalizeCommonJSImport } from './utils';

export interface NgxLaydateConfig {
  laydate: any | (() => Promise<any>);
  path: string;
}

export const NGX_LAYDATE_CONFIG = new InjectionToken<NgxLaydateConfig>('NGX_LAYDATE_CONFIG');

@Directive({
  selector: 'laydate, [laydate]',
  exportAs: 'laydate'
})
export class NgxLaydateDirective implements OnChanges, OnDestroy, AfterViewInit {
  @Input() options: any;

  // ngx-laydate events
  @Output() laydateInit = new EventEmitter<any>();
  @Output() optionsError = new EventEmitter<Error>();

  // laydate mouse events
  @Output() laydateReady = new EventEmitter<any>();
  @Output() laydateChange = new EventEmitter<any>();
  @Output() laydateDone = new EventEmitter<any>();
  @Output() laydateClose = new EventEmitter<any>();

  private ngLaydate: any;
  private laydate: any;
  private laydateIns: any;
  private initLaydateTimer?: number;

  constructor(
    @Inject(NGX_LAYDATE_CONFIG) public config: NgxLaydateConfig,
    private el: ElementRef,
    private ngZone: NgZone
  ) {
    this.laydate = this.config.laydate;
  }

  ngOnChanges(changes: SimpleChanges) {
    const filter = ChangeFilter.of(changes);
    filter.notFirstAndEmpty<any>('options').subscribe((opt) => this.onOptionsChange(opt));
  }

  ngOnDestroy() {
    window.clearTimeout(this.initLaydateTimer);
    this.dispose();
  }

  ngAfterViewInit(): void {
    this.initLaydateTimer = window.setTimeout(() => this.initChart());
  }

  public hint(value: string) {
    this.laydateIns.hint(value);
  }

  private dispose() {
    if (this.ngLaydate) {
      this.ngLaydate = null;
      this.laydateIns = null;
    }
  }

  private setOption(option: any) {
    if (this.ngLaydate) {
      try {
        // Since we are not using layui, we need to set the base path so that laydate.css can be loaded properly.
        // docs: https://layui.gitee.io/v2/docs/modules/laydate.html#path
        this.ngLaydate.path = this.config.path;
        this.laydateIns = this.ngLaydate.render({
          // The four common callbacks for the control, if the corresponding event callback function is registered in the options, it will override the plugin's own EventEmitter.
          // docs: https://layui.gitee.io/v2/docs/modules/laydate.html#onready
          ready: (data: any) => this.ngZone.run(() => this.laydateReady.emit(data)),
          change: (data: any) => this.ngZone.run(() => this.laydateChange.emit(data)),
          done: (data: any) => this.ngZone.run(() => this.laydateDone.emit(data)),
          close: (data: any) => this.ngZone.run(() => this.laydateClose.emit(data)),
          ...option
        });
      } catch (e) {
        console.error(e);
        this.optionsError.emit(e);
      }
    }
  }

  private createLaydate() {
    const dom = this.el.nativeElement;

    // here a bit tricky: we check if the laydate module is provided as function returning native import('...') then use the promise
    // otherwise create the function that imitates behaviour above with a provided as is module
    return this.ngZone.runOutsideAngular(() => {
      const load =
        typeof this.laydate === 'function' ? this.laydate : () => Promise.resolve(this.laydate);

      return normalizeCommonJSImport(load()).then((laydateInstance: any) => {
        this.options = Object.assign({}, this.options, { elem: dom });
        return laydateInstance;
      });
    });
  }

  private async initChart() {
    await this.onOptionsChange(this.options);
  }

  private async onOptionsChange(opt: any) {
    if (!opt) {
      return;
    }

    if (this.ngLaydate) {
      this.setOption(this.options);
    } else {
      this.ngLaydate = await this.createLaydate();
      this.laydateInit.emit(this.ngLaydate);
      this.setOption(this.options);
    }
  }

}
