import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgFirebaseViewComponent } from './ng-firebase-view/ng-firebase-view.component';
import { NgFirebaseViewChangelogComponent } from './ng-firebase-view-changelog/ng-firebase-view-changelog.component';
import { NgFirebaseViewLayerComponent } from './ng-firebase-view-layer/ng-firebase-view-layer.component';
import { NgFirebaseViewService } from './ng-firebase-view.service';

@NgModule({
  declarations: [
    NgFirebaseViewComponent,
    NgFirebaseViewLayerComponent,
    NgFirebaseViewChangelogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NgFirebaseViewComponent, NgFirebaseViewChangelogComponent],
  providers: [NgFirebaseViewService]
})
export class NgFirebaseViewModule {}
