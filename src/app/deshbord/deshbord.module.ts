import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignoutComponent } from './signout/signout.component';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SignoutComponent] 
})
export class DeshbordModule { }
