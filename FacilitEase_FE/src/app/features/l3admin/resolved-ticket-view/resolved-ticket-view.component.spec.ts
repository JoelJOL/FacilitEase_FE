import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedTicketViewComponent } from './resolved-ticket-view.component';

describe('ResolvedTicketViewComponent', () => {
  let component: ResolvedTicketViewComponent;
  let fixture: ComponentFixture<ResolvedTicketViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolvedTicketViewComponent]
    });
    fixture = TestBed.createComponent(ResolvedTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
