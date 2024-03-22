import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';

import { SignoutComponent } from './deshbord/signout/signout.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserLoginComponent,SignoutComponent,CreateUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second-app';
}
