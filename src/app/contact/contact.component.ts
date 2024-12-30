import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Output() myevent=new EventEmitter

  details={
    pos:"",
    browser:""
  }
  myprint(pos:any){
    this.details.pos=pos
    this.details.browser="chrome"
    this.myevent.emit(this.details)

  }
}
