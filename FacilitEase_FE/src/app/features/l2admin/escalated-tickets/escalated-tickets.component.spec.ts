import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalatedTicketsComponent } from './escalated-tickets.component';

describe('EscalatedTicketsComponent', () => {
  let component: EscalatedTicketsComponent;
  let fixture: ComponentFixture<EscalatedTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscalatedTicketsComponent]
    });
    fixture = TestBed.createComponent(EscalatedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
