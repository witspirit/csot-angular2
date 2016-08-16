import { Component, OnInit } from '@angular/core';
import {TextInputComponent} from "./text-input/text-input.component";
import {ChatStoreService} from "../../../shared/chat-store.service";
import {ChatBubbleListComponent} from "./chat-bubble-list/chat-bubble-list.component";

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
  directives: [TextInputComponent, ChatBubbleListComponent],
  providers: [ChatStoreService]
})
export class ChatComponent implements OnInit {
  private chatStore : ChatStoreService;

  constructor(chatStore : ChatStoreService) {
    this.chatStore = chatStore;
  }

  ngOnInit() {
  }

  deliverMessage(event: any) {
    console.log("event received: "+JSON.stringify(event));
    console.log("Message received: "+event.msg);
    this.chatStore.sendMessage(event.msg);
  }

}
