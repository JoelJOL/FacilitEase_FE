import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewEmployeeTicketsComponent } from './manager-view-employee-tickets.component';

describe('ManagerViewEmployeeTicketsComponent', () => {
  let component: ManagerViewEmployeeTicketsComponent;
  let fixture: ComponentFixture<ManagerViewEmployeeTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerViewEmployeeTicketsComponent]
    });
    fixture = TestBed.createComponent(ManagerViewEmployeeTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
