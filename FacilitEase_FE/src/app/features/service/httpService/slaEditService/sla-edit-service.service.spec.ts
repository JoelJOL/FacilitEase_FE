import { TestBed } from '@angular/core/testing';

import { SlaEditServiceService } from './sla-edit-service.service';

describe('SlaEditServiceService', () => {
  let service: SlaEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlaEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
