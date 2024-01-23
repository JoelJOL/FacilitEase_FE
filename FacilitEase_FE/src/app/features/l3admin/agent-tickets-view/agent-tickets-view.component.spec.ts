import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTicketsViewComponent } from './agent-tickets-view.component';

describe('AgentTicketsViewComponent', () => {
  let component: AgentTicketsViewComponent;
  let fixture: ComponentFixture<AgentTicketsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentTicketsViewComponent]
    });
    fixture = TestBed.createComponent(AgentTicketsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
