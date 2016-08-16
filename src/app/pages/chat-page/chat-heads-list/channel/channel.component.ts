import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'channel',
  templateUrl: 'channel.component.html',
  styleUrls: ['channel.component.css']
})
export class ChannelComponent implements OnInit {
  @Input() private channel;

  constructor() {}

  ngOnInit() {
  }

}
