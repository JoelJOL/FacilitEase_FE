import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRaisedAssignedComponent } from './ticket-raised-assigned.component';

describe('TicketRaisedAssignedComponent', () => {
  let component: TicketRaisedAssignedComponent;
  let fixture: ComponentFixture<TicketRaisedAssignedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketRaisedAssignedComponent]
    });
    fixture = TestBed.createComponent(TicketRaisedAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
