import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { MatModule } from 'src/app/mat-ui.module';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
