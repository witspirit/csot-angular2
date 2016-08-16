import { Component } from '@angular/core';
import {ChatPageComponent} from "./pages/chat-page/chat-page.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ChatPageComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
