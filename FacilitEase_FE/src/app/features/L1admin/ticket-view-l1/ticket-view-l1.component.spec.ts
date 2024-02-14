import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketViewL1Component } from './ticket-view-l1.component';

describe('TicketViewL1Component', () => {
  let component: TicketViewL1Component;
  let fixture: ComponentFixture<TicketViewL1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketViewL1Component]
    });
    fixture = TestBed.createComponent(TicketViewL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
