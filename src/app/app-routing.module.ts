import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './modules/common/components/home/home.component';
import{LoginComponent} from './modules/auth/components/login/login.component';
import{CoursesComponent} from './modules/courses/components/courses/courses.component';
import{AboutComponent} from './modules/common/components/about/about.component'
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'courses',
    component:CoursesComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
