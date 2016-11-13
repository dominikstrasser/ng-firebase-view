/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgFirebaseViewLayerComponent } from './ng-firebase-view-layer.component';

describe('NgFirebaseViewLayerComponent', () => {
  let component: NgFirebaseViewLayerComponent;
  let fixture: ComponentFixture<NgFirebaseViewLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFirebaseViewLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFirebaseViewLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
