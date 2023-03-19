import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { BasicCustomComponent } from './basic-custom/basic-custom.component';
import { BasicEventComponent } from './basic-event/basic-event.component';
import { BasicFormatComponent } from './basic-format/basic-format.component';
import { BasicGeneralComponent } from './basic-general/basic-general.component';
import { BasicLimitComponent } from './basic-limit/basic-limit.component';
import { BasicMarkComponent } from './basic-mark/basic-mark.component';
import { BasicOthenComponent } from './basic-othen/basic-othen.component';
import { BasicRangeComponent } from './basic-range/basic-range.component';
import { BasicThemeComponent } from './basic-theme/basic-theme.component';
import { BasicTypeComponent } from './basic-type/basic-type.component';
import { BasicUsageRoutingModule } from './basic-usage.routing';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  imports: [
    BasicUsageRoutingModule,
    ShareModule,
  ],
  declarations: [
    BasicComponent,
    BasicGeneralComponent,
    BasicTypeComponent,
    BasicRangeComponent,
    BasicFormatComponent,
    BasicLimitComponent,
    BasicThemeComponent,
    BasicEventComponent,
    BasicCustomComponent,
    BasicMarkComponent,
    BasicOthenComponent,
  ],
  exports: [
    BasicComponent,
  ]
})
export class BaseUsageModule { }
