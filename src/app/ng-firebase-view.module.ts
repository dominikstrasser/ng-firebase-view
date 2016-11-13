import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgFirebaseViewComponent } from './ng-firebase-view/ng-firebase-view.component';
import { NgFirebaseViewLayerComponent } from './ng-firebase-view-layer/ng-firebase-view-layer.component';
import { NgFirebaseViewService } from './ng-firebase-view.service';

@NgModule({
  declarations: [
    NgFirebaseViewComponent,
    NgFirebaseViewLayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NgFirebaseViewComponent],
  providers: [NgFirebaseViewService]
})
export class NgFirebaseViewModule {}
