import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsEscalatedComponent } from './ticket-details-escalated.component';

describe('TicketDetailsEscalatedComponent', () => {
  let component: TicketDetailsEscalatedComponent;
  let fixture: ComponentFixture<TicketDetailsEscalatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDetailsEscalatedComponent]
    });
    fixture = TestBed.createComponent(TicketDetailsEscalatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
