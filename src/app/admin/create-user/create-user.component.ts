import { Component } from '@angular/core';
import { eventNames } from 'process';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userName:string="shrawan Kumar";
  link:string="www.google.com";
  imagelink:string='assets/pick.jpg';
  status:boolean=false;
  buttonClass:string='buttonBack';
  OnMouseClick(event:any){
    this.buttonClass='buttonColor';
    this.status=true;
    console.log(event.eventNames);
  }
  OnDoubleClick(event:any){
    this.buttonClass='buttonBack';
    this.status=false;
  }

  OnKeyUp(event:any){
    console.log(event.key);
  }
  
}
