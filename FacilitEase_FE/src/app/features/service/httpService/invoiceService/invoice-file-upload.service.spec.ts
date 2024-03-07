import { TestBed } from '@angular/core/testing';

import { InvoiceFileUploadService } from './invoice-file-upload.service';

describe('InvoiceFileUploadService', () => {
  let service: InvoiceFileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceFileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
