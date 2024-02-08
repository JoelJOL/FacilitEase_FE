import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewLiveEmployeeTicketsComponent } from './manager-view-live-employee-tickets.component';

describe('ManagerViewLiveEmployeeTicketsComponent', () => {
  let component: ManagerViewLiveEmployeeTicketsComponent;
  let fixture: ComponentFixture<ManagerViewLiveEmployeeTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerViewLiveEmployeeTicketsComponent]
    });
    fixture = TestBed.createComponent(ManagerViewLiveEmployeeTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
