import { Component, OnInit } from '@angular/core';
import {TextInputComponent} from "./text-input/text-input.component";

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
  directives: [TextInputComponent]
})
export class ChatComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  deliverMessage(event: any) {
    console.log("event received: "+JSON.stringify(event));
    console.log("Message received: "+event.msg);
  }

}
