import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDocumentsComponent } from './ticket-documents.component';

describe('TicketDocumentsComponent', () => {
  let component: TicketDocumentsComponent;
  let fixture: ComponentFixture<TicketDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDocumentsComponent]
    });
    fixture = TestBed.createComponent(TicketDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
