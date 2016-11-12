import { Injectable } from '@angular/core';

@Injectable()
export class NgFirebaseViewService {

  public VISIBLE_NODES = {};

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

}
