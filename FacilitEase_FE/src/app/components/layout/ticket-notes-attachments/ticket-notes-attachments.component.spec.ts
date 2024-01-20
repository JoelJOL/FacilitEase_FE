import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNotesAttachmentsComponent } from './ticket-notes-attachments.component';

describe('TicketNotesAttachmentsComponent', () => {
  let component: TicketNotesAttachmentsComponent;
  let fixture: ComponentFixture<TicketNotesAttachmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketNotesAttachmentsComponent]
    });
    fixture = TestBed.createComponent(TicketNotesAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
