import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { MatModule } from '../../mat-ui.module';
import{AppRoutingModule} from '../../app-routing.module'


@NgModule({
  declarations: [
    MenuTopComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    AppRoutingModule
  ],
  exports: [
    MenuTopComponent
  ]
})
export class MenuModule { }
