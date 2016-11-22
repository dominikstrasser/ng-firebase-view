import { Component } from '@angular/core';

import { NgFirebaseViewService } from './ng-firebase-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public isDescriptionVisible = false;
  constructor(private ngFVS:NgFirebaseViewService) {
    this.ngFVS.init('test-1');
  }


}
