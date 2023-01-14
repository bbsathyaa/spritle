import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { StudentComponent } from './student/student.component';
import { MasterGuard } from './master.guard';
import { StudentGuard } from './student.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MasterGuard,StudentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
