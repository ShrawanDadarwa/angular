import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { LoginStyleComponent } from './login-style/login-style.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { LoginTemStyComponent } from './login-tem-sty/login-tem-sty.component';


@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet,LogInComponent,LoginStyleComponent,LoginTemplateComponent,LoginTemStyComponent],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 20';
  // name="shrawan Kumar dadarwal";
  // getFunctionData(){
  //   return "This is get function return data";
  // }
}
