import { Component } from '@angular/core';

import { NgFirebaseViewService } from './ng-firebase-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private ngFVS:NgFirebaseViewService) {
    this.ngFVS.init('mock-1');
  }
}
