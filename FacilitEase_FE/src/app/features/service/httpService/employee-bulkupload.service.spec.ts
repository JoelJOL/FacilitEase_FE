import { TestBed } from '@angular/core/testing';

import { EmployeeBulkuploadService } from './employee-bulkupload.service';

describe('EmployeeBulkuploadService', () => {
  let service: EmployeeBulkuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeBulkuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
