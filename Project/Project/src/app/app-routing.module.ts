import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MasterGuard } from './master.guard';
import { MasterComponent } from './master/master.component';
import { StudentGuard } from './student.guard';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Master',component:MasterComponent,canActivate:[MasterGuard]},
  {path:'Student',component:StudentComponent,canActivate:[StudentGuard]},
  {path:'',redirectTo:'/Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
