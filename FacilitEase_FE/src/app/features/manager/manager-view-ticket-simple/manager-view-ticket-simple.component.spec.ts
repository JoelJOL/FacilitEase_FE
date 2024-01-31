import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewTicketSimpleComponent } from './manager-view-ticket-simple.component';

describe('ManagerViewTicketSimpleComponent', () => {
  let component: ManagerViewTicketSimpleComponent;
  let fixture: ComponentFixture<ManagerViewTicketSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerViewTicketSimpleComponent]
    });
    fixture = TestBed.createComponent(ManagerViewTicketSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
