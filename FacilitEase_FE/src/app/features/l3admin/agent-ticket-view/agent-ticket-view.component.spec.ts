import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTicketViewComponent } from './agent-ticket-view.component';

describe('AgentTicketViewComponent', () => {
  let component: AgentTicketViewComponent;
  let fixture: ComponentFixture<AgentTicketViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentTicketViewComponent]
    });
    fixture = TestBed.createComponent(AgentTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
