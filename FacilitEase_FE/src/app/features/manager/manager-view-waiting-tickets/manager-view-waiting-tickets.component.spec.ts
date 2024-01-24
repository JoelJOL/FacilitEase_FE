import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewWaitingTicketsComponent } from './manager-view-waiting-tickets.component';

describe('ManagerViewWaitingTicketsComponent', () => {
  let component: ManagerViewWaitingTicketsComponent;
  let fixture: ComponentFixture<ManagerViewWaitingTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerViewWaitingTicketsComponent]
    });
    fixture = TestBed.createComponent(ManagerViewWaitingTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
