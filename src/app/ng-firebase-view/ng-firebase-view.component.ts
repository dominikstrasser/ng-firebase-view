import { Component, OnInit, NgZone } from '@angular/core';

import * as firebase from 'firebase';
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
  constructor(
    private zone: NgZone,
    private ngFVS: NgFirebaseViewService
  ) {

    this.initFirebase();
    this.TEMP_REF = this.ngFVS.referencePath;
    this.ngFVS.referenceListener.subscribe(data => {
      console.log(data);
    })
    this.initReference();

    this.initSubscription();
  }


  private initSubscription() {
    this.databaseRef.on('value', snap => {
      this.zone.run(() => {
        this.dataTree = snap.val();
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
