import { TestBed } from '@angular/core/testing';

import { ApproveDenyService } from './approve-deny.service';

describe('ApproveDenyService', () => {
  let service: ApproveDenyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveDenyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
