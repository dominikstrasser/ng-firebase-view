import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

import * as firebase from 'firebase';
import { fromJS, Map, List } from 'immutable';
var diff = require('immutablediff');
import { ChangelogItemFactory, ChangelogItemRecord } from './models/changelogItem.model';
import { ChangelogGroupFactory, ChangelogGroupRecord, ChangelogGroup } from './models/changelogGroup.model';


@Injectable()
export class NgFirebaseViewService {

  public VISIBLE_NODES = {};

  public referencePath = null;
  public changelogListener = new EventEmitter();
  public dataTreeListener = new EventEmitter();


  private databaseRef: firebase.database.Reference = null;
  private TEMP_REF = 'mock-1';
  public dataTree: Map<any, any> = Map();
  public changelog: List<ChangelogGroupRecord> = <any>List();

  public visibleChangelogIds = {};

  constructor(
    private zone: NgZone
  ) {
    this.VISIBLE_NODES[""] = true;
    this.VISIBLE_NODES["/app"] = true;
    this.VISIBLE_NODES["/app/invites"] = true;
    this.VISIBLE_NODES["/app/invites/a0"] = true;
  }

  addToVisibleNodes(_path) {
    this.VISIBLE_NODES[_path] = true;
  }

  removeFromVisibleNodes(_path) {
    delete this.VISIBLE_NODES[_path];
  }

  init(referencePath: string) {
    console.log('init');
    this.initFirebase();
    this.referencePath = referencePath;
    this.initReference();
    this.initSubscription();
  }

  private initSubscription() {
    this.databaseRef.on('value', snap => {
      this.zone.run(() => {
        if (this.dataTree) {
          const dataTreeDiff = diff(this.dataTree, fromJS(snap.val()));
          this.addToChangelog(dataTreeDiff);
          this.changelogListener.emit(this.changelog);
        }
        this.dataTree = fromJS(snap.val());
        this.dataTreeListener.emit(this.dataTree);
      });
    });
  }

  private addToChangelog(dataTreeDiff: List<ChangelogItemRecord>) {
    const items: List<ChangelogItemRecord> = dataTreeDiff.map(cl => ChangelogItemFactory(cl)).toList();
    const lastItem = this.changelog.last();

    if (lastItem && (new Date().getTime() - lastItem.date) < 3000) {
      const newItems = this.changelog.last().items.concat(items);

      this.changelog = this.changelog.updateIn([this.changelog.size - 1, 'items'], (v) => {
        return newItems;
      });
      
    } else {
      const group: ChangelogGroup = {
        date: new Date().getTime(),
        items: items
      }
      const groupRecord = ChangelogGroupFactory(group);
      this.changelog = this.changelog.push(groupRecord);
    }

  }


  private initReference() {
    this.databaseRef = firebase.database().ref(this.referencePath);
  }


  private initFirebase() {
    firebase.initializeApp({
      databaseURL: "ws://127.0.1:5000",
    });
  }

}
