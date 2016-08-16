import { Component, OnInit } from '@angular/core';
import {MdCard} from "@angular2-material/card";
import {MdToolbar} from "@angular2-material/toolbar";
import {ChatComponent} from "./chat/chat.component";


@Component({
  moduleId: module.id,
  selector: 'chat-page',
  templateUrl: 'chat-page.component.html',
  styleUrls: ['chat-page.component.css'],
  directives: [MdCard, MdToolbar, ChatComponent]
})
export class ChatPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
