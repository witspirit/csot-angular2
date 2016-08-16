import { Component, OnInit, Input } from '@angular/core';
import {ChatBubbleComponent} from "./chat-bubble/chat-bubble.component";

@Component({
  moduleId: module.id,
  selector: 'chat-bubble-list',
  templateUrl: 'chat-bubble-list.component.html',
  styleUrls: ['chat-bubble-list.component.css'],
  directives: [ChatBubbleComponent]
})
export class ChatBubbleListComponent implements OnInit {
  @Input() private messages;
  @Input() private myUserId;

  constructor() {}

  ngOnInit() {
  }

}
