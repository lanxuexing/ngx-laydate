import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgZone,
  OnChanges,
  Output,
  SimpleChanges,
  forwardRef,
  inject,
  DestroyRef,
  Renderer2
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { normalizeCommonJSImport } from './utils';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export interface NgxLaydateConfig {
  laydate: any | (() => Promise<any>);
  path: string;
}

export const NGX_LAYDATE_CONFIG = new InjectionToken<NgxLaydateConfig>('NGX_LAYDATE_CONFIG');

let laydatePromise: Promise<any> | null = null;


@Directive({
  selector: 'laydate, [laydate]',
  exportAs: 'laydate',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxLaydateDirective),
      multi: true
    }
  ]
})
export class NgxLaydateDirective implements OnChanges, AfterViewInit, ControlValueAccessor {
  @Input() options: Record<string, any> = {};

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
  private currentValue: any = '';
  private ngLaydateCreated$ = new Subject<void>();
  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };

  private config = inject(NGX_LAYDATE_CONFIG);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private ngZone = inject(NgZone);
  private destroyRef = inject(DestroyRef);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.laydate = this.config.laydate;
    this.destroyRef.onDestroy(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.clearTimeout(this.initLaydateTimer);
      }
      this.dispose();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options'] && !changes['options'].isFirstChange()) {
      const opt = changes['options'].currentValue;
      if (opt !== undefined && opt !== null) {
        this.onOptionsChange(opt);
      }
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initLaydateTimer = window.setTimeout(() => this.initLaydate());
    }
  }

  writeValue(obj: any): void {
    this.currentValue = obj;
    const value = obj === null || obj === undefined ? '' : obj;
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

  registerOnChange(fn: any): void {
    this.isNgModel = true;
    this.onChange = fn;
    // delay execution until ngLaydate instance is created.
    this.ngLaydateCreated$.asObservable().pipe(
      takeUntilDestroyed(this.destroyRef)
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
      this.renderer.setProperty(dom, 'disabled', isDisabled);
    }
  }

  public hint(value: string) {
    this.laydateIns?.hint(value);
  }

  private dispose() {
    if (this.ngLaydate) {
      // Logic to properly dispose or unbind if laydate supports it
      // laydate doesn't seem to have a destroy method in strict sense for the global obj,
      // but individual instances rendered might need cleanup.
      // Since laydate attaches to DOM, removing DOM (Angular does this) might be enough.
      // But clearing references is good.
      this.ngLaydate = null;
      this.laydateIns = null;
    }
  }

  private setOption(option: any) {
    if (this.ngLaydate) {
      try {
        // Since we are not using layui, we need to set the base path so that laydate.css can be loaded properly.
        // docs: https://layui.dev/docs/2/laydate/#path
        this.ngLaydate.path = this.config.path;

        // Ensure elem is correctly set to this element to avoid collision
        const config = {
          elem: this.el.nativeElement,
          // The four common callbacks for the control...
          ready: (...args: any) => this.ngZone.run(() => this.laydateReady.emit(args)),
          change: (...args: any) => this.ngZone.run(() => this.laydateChange.emit(args)),
          done: (...args: any) => this.ngZone.run(() => this.laydateDone.emit(args)),
          close: (...args: any) => this.ngZone.run(() => this.laydateClose.emit(args)),
          ...option
        };

        this.laydateIns = this.ngLaydate.render(config);
      } catch (e) {
        console.error(e);
        this.optionsError.emit(e as Error);
      }
    }
  }

  private createLaydate() {
    const dom = (this.options && this.options['elem']) || this.el.nativeElement;

    // Use a global promise to ensure laydate is loaded only once
    return this.ngZone.runOutsideAngular(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return Promise.resolve(null);
      }

      if (!laydatePromise) {
        const load =
          typeof this.laydate === 'function' ? this.laydate : () => Promise.resolve(this.laydate);
        laydatePromise = normalizeCommonJSImport(load());
      }

      return laydatePromise!.then((laydateInstance: any) => {
        // Check if laydateInstance has render method, if not try to get from window
        if ((!laydateInstance || typeof laydateInstance.render !== 'function') && isPlatformBrowser(this.platformId) && (window as any).laydate) {
          laydateInstance = (window as any).laydate;
        }

        this.options = Object.assign({}, this.options, {
          elem: dom,
          ...(this.isNgModel && {
            // intercept 'done' callback of the control, continue event propagation when callback is present.
            ...(this.options && this.options['done'] && { ngDone: this.options['done'] }),
            done: (value: any, date: any, endDate: any) => {
              this.onChange(value);
              this.ngZone.run(() => {
                // Try to keep model in sync if needed, but onChange handles it
              });
              if (this.options && this.options['ngDone']) {
                this.options['ngDone'](value, date, endDate);
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
