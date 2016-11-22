import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NgFirebaseViewService } from '../ng-firebase-view.service';

import { List } from 'immutable';

@Component({
  selector: 'ng-firebase-view-changelog',
  templateUrl: './ng-firebase-view-changelog.component.html',
  styleUrls: ['./ng-firebase-view-changelog.component.css']
})
export class NgFirebaseViewChangelogComponent implements OnInit, OnChanges {


  @Input('changelog') changelog: List<any> = List();

  constructor(
    private ngFVS: NgFirebaseViewService
  ) {}

  ngOnInit() {
    this.handleData();
  }

  ngOnChanges() {
    this.handleData();
  }

  handleData() {
    console.log(this.changelog);
  }

}
