import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NgFirebaseViewService } from '../ng-firebase-view.service';

import { Map } from 'immutable';

@Component({
  selector: 'ng-firebase-view-layer',
  templateUrl: './ng-firebase-view-layer.component.html',
  styleUrls: ['./ng-firebase-view-layer.component.css']
})
export class NgFirebaseViewLayerComponent implements OnInit, OnChanges {


  @Input('item') item: Map<any, any>;
  @Input('path') path = "";

  private itemKeys;

  public isNextLayerVisible: boolean = false;

  constructor(private ngFVS: NgFirebaseViewService) { }

  ngOnInit() {
    this.handleData();
  }

  ngOnChanges() {
    this.handleData();
  }

  handleData() {
    this.itemKeys = this.item.keySeq().toArray();
    if(this.ngFVS.VISIBLE_NODES[this.path]) this.isNextLayerVisible = true;
  }

  hasObjectChildren(itemKey) {
    return this.isNextLayerVisible && typeof this.item.get(itemKey) == "object";
  }

  hasChildrenToDisplay(itemKey) {
    return typeof this.item.toJS()[itemKey] !== 'object';
  }

  toggle() {
    if(this.isNextLayerVisible) {
      this.ngFVS.removeFromVisibleNodes(this.path);
    } else {
      this.ngFVS.addToVisibleNodes(this.path);
    }
    this.isNextLayerVisible = !this.isNextLayerVisible;
  }

  getCurrentPath(itemKey) {
    return this.path + "/" + itemKey;
  }

}
