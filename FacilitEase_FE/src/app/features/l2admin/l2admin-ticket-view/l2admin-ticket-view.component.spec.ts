import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2adminTicketViewComponent } from './l2admin-ticket-view.component';

describe('L2adminTicketViewComponent', () => {
  let component: L2adminTicketViewComponent;
  let fixture: ComponentFixture<L2adminTicketViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2adminTicketViewComponent]
    });
    fixture = TestBed.createComponent(L2adminTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
