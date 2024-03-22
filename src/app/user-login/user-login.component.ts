import { Component } from '@angular/core';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CustomerLoginComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  parientMessage:string = "Notifying to child";
  dob:string = "03-07-1992";
  childReceivedMessage:string ="";
  
  receiveMessage(messageEvent:string){
    this.childReceivedMessage=messageEvent;
  }
}
