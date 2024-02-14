import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEscalatedComponent } from './ticket-escalated.component';

describe('TicketEscalatedComponent', () => {
  let component: TicketEscalatedComponent;
  let fixture: ComponentFixture<TicketEscalatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketEscalatedComponent]
    });
    fixture = TestBed.createComponent(TicketEscalatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
