import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/Rx";
import * as io from "socket.io-client";

@Injectable()
export class ChatStoreService {
  private messages: BehaviorSubject<any> = new BehaviorSubject([]);
  public messages$: Observable<any> = this.messages.asObservable();

  private userId: BehaviorSubject<String> = new BehaviorSubject("");
  public userId$: Observable<String> = this.userId.asObservable();

  private channels: BehaviorSubject<any> = new BehaviorSubject([]);
  public channels$: Observable<any> = this.channels.asObservable();

  private socket : SocketIOClient.Socket;

  constructor() {
    //init socket connection and initial value for the observable
    // this.socket = io('http://94.226.163.187:9008');
    this.socket = io('http://localhost:9008');
    this.messages.next([]);

    this.socket.on('connect', () => {
      console.log('connect');
    });

    //userId is to determine if a message is yours or not
    this.socket.on('user', (userId) => {
      console.log('user id is ', userId);
      this.userId.next(userId);
    });

    //the default channel will be 'SoT'
    this.socket.on('channels', (availableChannels) => {
      console.log('available channels ', availableChannels);
      this.channels.next(availableChannels);
    });

    //handle incoming messages for channels
    this.channels$.subscribe((channels) => {
      channels.forEach((channel) => {
        this.socket.on(channel, (msgs) => {
          this.messages.next(msgs);
        });
      });
    });
  }

  sendMessage(message: String) {
    console.log("sendMessage: "+message);
    this.socket.emit('SoT', message);
  }

}
