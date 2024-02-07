import { TestBed } from '@angular/core/testing';

import { ManagerSubordinatesService } from './manager-subordinates.service';

describe('ManagerSubordinatesService', () => {
  let service: ManagerSubordinatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerSubordinatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
