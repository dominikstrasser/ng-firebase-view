import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NgFirebaseViewService } from '../ng-firebase-view.service';
import { List } from 'immutable';
import { ChangelogGroupRecord } from '../models/changelogGroup.model';

@Component({
  selector: 'ng-firebase-view-changelog',
  templateUrl: './ng-firebase-view-changelog.component.html',
  styleUrls: ['./ng-firebase-view-changelog.component.css']
})
export class NgFirebaseViewChangelogComponent implements OnInit, OnChanges {


  @Input('changelog') changelog: List<any> = List();

  constructor(
    private ngFVS: NgFirebaseViewService
  ) { }

  ngOnInit() {
    this.handleData();
  }

  ngOnChanges() {
    this.handleData();
  }

  handleData() {
    // console.log(this.changelog);

  }

  toggle(item: ChangelogGroupRecord) {
    //const hashCode = item.hashCode();
    const id = item.date;
    this.ngFVS.visibleChangelogIds[id] = !this.ngFVS.visibleChangelogIds[id];
  }

  isVisible(item: ChangelogGroupRecord) {
    //const hashCode = item.hashCode();
    const id = item.date;
    return this.ngFVS.visibleChangelogIds[id];
  }

  getJsonString(data) {
    return JSON.stringify(data, undefined, 2);
  }


}
