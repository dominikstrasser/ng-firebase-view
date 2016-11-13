import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NgFirebaseViewService {

  public VISIBLE_NODES = {};

  public referencePath = null;

  public referenceListener = new EventEmitter();

  constructor() {
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
    console.log('intit');
    this.referencePath = referencePath;

    this.referenceListener.emit(this.referencePath);
  }

}
