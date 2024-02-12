import { TestBed } from '@angular/core/testing';

import { TicketAttachmentService } from './ticket-attachment.service';

describe('TicketAttachmentService', () => {
  let service: TicketAttachmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketAttachmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
