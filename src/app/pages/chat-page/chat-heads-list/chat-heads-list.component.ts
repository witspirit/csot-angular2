import { Component, OnInit } from '@angular/core';
import {ChatStoreService} from "../../../shared/chat-store.service";
import {ChannelComponent} from "./channel/channel.component";

@Component({
  moduleId: module.id,
  selector: 'chat-heads-list',
  templateUrl: 'chat-heads-list.component.html',
  styleUrls: ['chat-heads-list.component.css'],
  directives: [ChannelComponent],
  providers: [ChatStoreService]
})
export class ChatHeadsListComponent implements OnInit {
  private chatStore : ChatStoreService;

  constructor(chatStore : ChatStoreService) {
    this.chatStore = chatStore;
  }

  ngOnInit() {
  }

}
