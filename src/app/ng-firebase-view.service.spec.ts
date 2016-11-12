/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgFirebaseViewService } from './ng-firebase-view.service';

describe('Service: NgFirebaseView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFirebaseViewService]
    });
  });

  it('should ...', inject([NgFirebaseViewService], (service: NgFirebaseViewService) => {
    expect(service).toBeTruthy();
  }));
});
