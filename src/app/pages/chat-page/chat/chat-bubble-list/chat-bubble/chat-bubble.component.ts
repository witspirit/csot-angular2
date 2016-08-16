import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chat-bubble',
  template: '<span #bubble class="{{style}}">{{id}} : {{messageText}}</span>',
  styleUrls: ['chat-bubble.component.css']
})
export class ChatBubbleComponent implements OnInit {
  @Input() private message;
  @Input() private myUserId;
  @ViewChild('bubble') private view;

  private id : number;
  private messageText : String;
  private owner : String;
  private style : String;

  constructor() {}

  ngOnInit() {
    this.id = this.message.id;
    this.messageText = this.message.message;
    this.owner = this.message.owner;

    if (this.owner === this.myUserId) {
      this.style = "bubble-owner";
    } else {
      this.style = "bubble-other";
    }

    this.view.nativeElement.style.bottom = (this.id*60 + 30) + "px";
  }

}
