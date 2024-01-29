import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1EscalatedTicketsComponent } from './l1-escalated-tickets.component';

describe('L1EscalatedTicketsComponent', () => {
  let component: L1EscalatedTicketsComponent;
  let fixture: ComponentFixture<L1EscalatedTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L1EscalatedTicketsComponent]
    });
    fixture = TestBed.createComponent(L1EscalatedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
