/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgFirebaseViewComponent } from './ng-firebase-view.component';

describe('NgFirebaseViewComponent', () => {
  let component: NgFirebaseViewComponent;
  let fixture: ComponentFixture<NgFirebaseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFirebaseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFirebaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
