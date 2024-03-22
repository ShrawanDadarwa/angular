import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-customer-login',
  standalone: true,
  imports: [],
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css'
})
export class CustomerLoginComponent {
    @Input() message:string ="";
    @Input() mydob:string=""

    @Output() messageEvent = new EventEmitter<string>();

    sendParient(){
      this.messageEvent.emit("Child is Notifying you");
    }
}
