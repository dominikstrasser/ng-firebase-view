import { Component, OnInit, NgZone } from '@angular/core';

import * as firebase from 'firebase';
import { fromJS } from 'immutable';
var diff = require('immutablediff');

import { NgFirebaseViewService } from '../ng-firebase-view.service';


@Component({
  selector: 'ng-firebase-view',
  templateUrl: './ng-firebase-view.component.html',
  styleUrls: ['./ng-firebase-view.component.css']
})
export class NgFirebaseViewComponent implements OnInit {

  private databaseRef: firebase.database.Reference = null;
  private TEMP_REF = null;
  public dataTree = null;
  public dataDiff = null;
  constructor(
    private zone: NgZone,
    private ngFVS: NgFirebaseViewService
  ) {

    this.initFirebase();
    this.TEMP_REF = this.ngFVS.referencePath;
    this.ngFVS.referenceListener.subscribe(data => {

    })
    this.initReference();
    this.initSubscription();

    setTimeout(() => {
      this.databaseRef.child('app').child('test123').set('test');
    }, 4000);

  }


  private initSubscription() {
    this.databaseRef.on('value', snap => {
      this.zone.run(() => {
        if (this.dataTree) {
          this.dataDiff = diff(this.dataTree, fromJS(snap.val()));
          this.ngFVS.changelogListener.emit(this.dataDiff);
        }
        this.dataTree = fromJS(snap.val())
      });
    });
  }


  private initReference() {
    this.databaseRef = firebase.database().ref(this.TEMP_REF);
  }


  private initFirebase() {
    firebase.initializeApp({
      databaseURL: "ws://127.0.1:5000",
    });
  }

  ngOnInit() {
  }

}
