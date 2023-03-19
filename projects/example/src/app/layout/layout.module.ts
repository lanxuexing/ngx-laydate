import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [AppMenuComponent],
  imports: [ShareModule],
  exports: [AppMenuComponent],
})
export class LayoutModule { }
