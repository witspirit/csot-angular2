import { Component, OnInit } from '@angular/core';
import {MdCard} from "@angular2-material/card";
import {MdToolbar} from "@angular2-material/toolbar";
import {ChatComponent} from "./chat/chat.component";
import {ChatHeadsListComponent} from "./chat-heads-list/chat-heads-list.component";


@Component({
  moduleId: module.id,
  selector: 'chat-page',
  templateUrl: 'chat-page.component.html',
  styleUrls: ['chat-page.component.css'],
  directives: [MdCard, MdToolbar, ChatComponent, ChatHeadsListComponent]
})
export class ChatPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
