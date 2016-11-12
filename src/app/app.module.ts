import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgFirebaseViewComponent } from './ng-firebase-view/ng-firebase-view.component';
import { NgFirebaseViewLayerComponent } from './ng-firebase-view-layer/ng-firebase-view-layer.component';
import { NgFirebaseViewService } from './ng-firebase-view.service';

@NgModule({
  declarations: [
    AppComponent,
    NgFirebaseViewComponent,
    NgFirebaseViewLayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NgFirebaseViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
