import { TestBed } from '@angular/core/testing';

import { DepartmentHeadService } from './department-head.service';

describe('DepartmentHeadService', () => {
  let service: DepartmentHeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentHeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
