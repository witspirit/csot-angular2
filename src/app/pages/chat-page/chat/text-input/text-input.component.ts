import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'text-input',
  template: '<input type="text" (keypress)="inputArrived($event)" [(ngModel)]="chatMessage"/>',
  styleUrls: ['text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Output() messageEntered = new EventEmitter();
  private chatMessage: String = "";

  constructor() {}

  ngOnInit() {
  }

  inputArrived(event: any) {
    console.log("InputArrived: Key="+ event.key + " Message so far=" + this.chatMessage );
    if (event.key === "Enter") {
      this.messageEntered.emit({msg: this.chatMessage});
      this.chatMessage = "";
    }
  }

}
