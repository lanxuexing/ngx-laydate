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
  SimpleChanges,
  forwardRef
} from '@angular/core';
import { ChangeFilter } from './change-filter';
import { normalizeCommonJSImport } from './utils';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface NgxLaydateConfig {
  laydate: any | (() => Promise<any>);
  path: string;
}

export const NGX_LAYDATE_CONFIG = new InjectionToken<NgxLaydateConfig>('NGX_LAYDATE_CONFIG');

const NGX_LAYDATE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxLaydateDirective),
  multi: true
};

@Directive({
  selector: 'laydate, [laydate]',
  exportAs: 'laydate',
  providers: [NGX_LAYDATE_VALUE_ACCESSOR]
})
export class NgxLaydateDirective implements OnChanges, OnDestroy, AfterViewInit, ControlValueAccessor {
  @Input() options: Partial<any> = {};

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

  // controlValueAccessor
  private isNgModel = false;
  private currentValue = '';
  private destroy$ = new Subject<void>();
  private ngLaydateCreated$ = new Subject<void>();
  private onChange: any = () => { };
  private onTouched: any = () => { };

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
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.initLaydateTimer = window.setTimeout(() => this.initLaydate());
  }

  writeValue(obj: any): void {
    this.currentValue = obj;
  }

  registerOnChange(fn: any): void {
    this.isNgModel = true;
    this.onChange = fn;
    // delay execution until ngLaydate instance is created.
    this.ngLaydateCreated$.asObservable().pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.setOption({ ...this.options, value: this.currentValue });
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    const dom = this.el.nativeElement;
    if (dom && dom.nodeName === 'INPUT') {
      dom.disabled = isDisabled;
    }
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
          ready: (...agrs: any) => this.ngZone.run(() => this.laydateReady.emit(agrs)),
          change: (...agrs: any) => this.ngZone.run(() => this.laydateChange.emit(agrs)),
          done: (...agrs: any) => this.ngZone.run(() => this.laydateDone.emit(agrs)),
          close: (...agrs: any) => this.ngZone.run(() => this.laydateClose.emit(agrs)),
          ...option
        });
      } catch (e) {
        console.error(e);
        this.optionsError.emit(e);
      }
    }
  }

  private createLaydate() {
    const dom = (this.options && this.options.elem) || this.el.nativeElement;

    // here a bit tricky: we check if the laydate module is provided as function returning native import('...') then use the promise
    // otherwise create the function that imitates behaviour above with a provided as is module
    return this.ngZone.runOutsideAngular(() => {
      const load =
        typeof this.laydate === 'function' ? this.laydate : () => Promise.resolve(this.laydate);

      return normalizeCommonJSImport(load()).then((laydateInstance: any) => {
        this.options = Object.assign({}, this.options, {
          elem: dom,
          ...(this.isNgModel && {
            // intercept 'done' callback of the control, continue event propagation when callback is present.
            ...(this.options && this.options.done && { ngDone: this.options.done }),
            done: (value, date, endDate) => {
              this.onChange(value);
              if (this.options && this.options.ngDone) {
                this.options.ngDone(value, date, endDate);
              }
            }
          })
        });
        return laydateInstance;
      });
    });
  }

  private async initLaydate() {
    await this.onOptionsChange(this.options);
  }

  private async onOptionsChange(opt: any) {
    if (this.ngLaydate) {
      this.setOption(this.options);
    } else {
      this.ngLaydate = await this.createLaydate();
      this.laydateInit.emit(this.ngLaydate);
      if (this.isNgModel) {
        this.ngLaydateCreated$.next();
      } else {
        this.setOption(this.options);
      }
    }
  }

}
