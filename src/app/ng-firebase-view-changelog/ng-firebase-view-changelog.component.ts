import { Component, OnInit, OnChanges, NgZone } from '@angular/core';
import { NgFirebaseViewService } from '../ng-firebase-view.service';

import { List } from 'immutable';

@Component({
  selector: 'ng-firebase-view-changelog',
  templateUrl: './ng-firebase-view-changelog.component.html',
  styleUrls: ['./ng-firebase-view-changelog.component.css']
})
export class NgFirebaseViewChangelogComponent implements OnInit, OnChanges {


  public items: List<any> = List();

  constructor(
    private ngFVS: NgFirebaseViewService,
    private zone: NgZone
  ) {
    ngFVS.changelogListener.subscribe(data => {
      this.zone.run(() => {
        this.items = this.items.push(...data.toJS());
      });


    });
  }

  ngOnInit() {
    this.handleData();
  }

  ngOnChanges() {
    this.handleData();
  }

  handleData() {

  }

}
