import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HomeComponent } from './home/home.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  imports: [WelcomeRoutingModule, ShareModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class WelcomeModule { }
